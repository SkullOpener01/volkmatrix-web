import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) {
  }


  private chatApi = 'api/v1.0/chat'

  fetchUniqueUsers(phoneNumberId : string) {
    return this.http.get(environment.BASE_URL_WEBSITE + this.chatApi + '/fetch/users',
      {params : {phoneNumberId : phoneNumberId}});

  }

  fetchUsersChat(phoneNumberId : string, userMobile : string) {
    return this.http.get(environment.BASE_URL_WEBSITE + this.chatApi + '/fetch/users/chat',
      {params : {phoneNumberId : phoneNumberId, userMobile : userMobile}});

  }


}
