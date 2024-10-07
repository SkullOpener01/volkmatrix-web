import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {ChatService} from "../chat.service";
import {AlertService} from "../../../services/alert.service";
import {WhatsappTextFormatterPipe} from "../../../pipes/whatsappTextFormatterPipe";

@Component({
  selector: 'app-user-chat-screen',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    NgIf,
    WhatsappTextFormatterPipe,
  ],
  templateUrl: './user-chat-screen.component.html',
  styleUrl: './user-chat-screen.component.scss'
})
export class UserChatScreenComponent implements OnInit {
    phoneNumberId= "397649540105559";
  selectedUser : any; // Initially selected user
  searchTerm: string = '';

  constructor(private chatService: ChatService, private alertService: AlertService)  {}
  ngOnInit(): void {
    this.fetchAllUsers();
  }

  isUserListCollapsed: boolean = false; // Initially not collapsed

  // Toggle function to collapse or expand the user list
  toggleUserList() {
    this.isUserListCollapsed = !this.isUserListCollapsed;
  }

  users: any[] = [];
 // Initially selected user
  chatMessages: any[]= [];



  public fetchAllUsers() {
    this.chatService.fetchUniqueUsers(this.phoneNumberId).subscribe({
      next: (response: any) => {
        if (response.statusCode == 200) {
          console.log("fetch all users response :: ", response);
          // this.users = response.datalist.map((number: any) => ({
          //   name: number, // Use phone number as name for now
          //   number,
          //   profilePic: 'https://www.volkmatrix.com/icons/logo_white.png'
          // }));
          this.users = response.datalist;

          // Set selectedUser after users are fetched
          this.selectedUser = this.users[0] || null; // Set to the first user or null if no users
          this.fetchChatMessages(this.users[0]);
        }
      },
      error: (error : any) => {
        this.alertService.showApiAlert(error.message, "danger");
      }
    });
  }


  fetchChatMessages(userId: any) {
    console.log("fetchChatMessages :: ", userId);
    this.chatService.fetchUsersChat(this.phoneNumberId,userId.userMobile ).subscribe({
      next: (response: any) => {
        if (response.statusCode === 200) {
          this.chatMessages = response.datalist;
        } else {
          this.alertService.showApiAlert(response.message,"error"); // Handle errors
        }
      }
    });
  }

  selectUser(user: any) {
    console.log("selectUser clicked ", user);
    this.selectedUser = user;
    this.fetchChatMessages(user); // Update this method to fetch messages for the selected user
  }

  searchUser(event: KeyboardEvent) {
    console.log("using search filter ::: {} ",event)
    const input = (event.target as HTMLInputElement).value; // Get the current value of the input

    // Check if the Enter key (key code 13) is pressed
    if (event.key === 'Enter') {
      this.searchTerm = input; // Set the search term to the input value
      console.log("searcinh user after enter pressed ::: ", this.searchTerm);
    }
  }



  getOriginalMessageText(reactedOnMsgId: string): string {
    console.log("serarching Reacted message id ::: ")
    const originalMessage = this.chatMessages.find(msg => msg.responseMsgId === reactedOnMsgId);
   const finalMessage = originalMessage ? originalMessage.msgText  ||  originalMessage.templateName : 'Message not' +
      ' found';

   if (finalMessage.length > 20) {
   return finalMessage.substring(0,20);
   }else {
     return finalMessage;
   }


  }



  sendMessage() {
    console.log("inside send message ")
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Handle file upload logic here
      console.log('File selected:', file);
    }
  }
}
