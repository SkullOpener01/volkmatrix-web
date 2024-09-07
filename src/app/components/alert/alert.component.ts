import {Component, OnInit} from '@angular/core';
import {AlertService} from "../../services/alert.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  standalone: true,
  imports: [
    NgIf
  ],
  styleUrl: './alert.component.scss'
})
export class AlertComponent implements OnInit {
  message: string | null = null;
  type: string = 'success';
  progress: number = 100;
  ApiPopup: boolean = false;
  alertPopup: boolean = false;
  notificationType: string | null = null;

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.alertService.alert$.subscribe(alert => {
      this.notificationType = alert.notificationType;

      // Handle which notification to display based on notificationType
      if (this.notificationType === 'apiPopup') {
        // this.closeAlert(); // Close any existing regular alert
        this.showApiPopup(alert.message, alert.type); // Show API popup
      } else if (this.notificationType === 'alert') {
        // this.closeApiPopup(); // Close API popup if open
        this.showAlert(alert.message, alert.type); // Show regular alert
      }
    });
  }

  // Method to show the regular alert
  showAlert(message: string, type: string) {
    this.alertPopup = true;
    this.message = message;
    this.type = type;
    this.progress = 100;

   this.closeNotification();
  }

  // Method to close the regular alert
  closeAlert() {
    this.message = null;
    this.progress = 100;
    this.alertPopup = false;
  }

  // Method to show the API popup
  showApiPopup(message: string, type: string) {
    this.ApiPopup = true;
    this.message = message;
    this.type = type;

this.closeNotification();
  }

  // Method to close the API popup
  closeApiPopup() {
    this.ApiPopup = false;
    this.message = null;
  }

  // Close the modal specifically (from the close button)
  closeModal() {
    this.closeApiPopup(); // Close the API popup when the modal is dismissed
  }

  closeNotification() {


    const duration = 3000; // 3 seconds
    const interval = 300; // 100 ms interval
    const decrement = 100 / (duration / interval);

    const intervalId = setInterval(() => {
        this.progress -= decrement;
        if (this.progress <= 0) {
          clearInterval(intervalId);
          this.closeAlert();
          this.closeModal();
        }
      }, interval);
  }
}
