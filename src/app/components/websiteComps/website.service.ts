import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  constructor(private http: HttpClient,) {
  }

  private websiteAPI = 'api/v1.0/web'

  demoRequestNew(data: any) {
    return this.http.post(environment.BASE_URL_WEBSITE + this.websiteAPI + '/demo/req', data);
  }

  // add subscriber to mailing list
  subscribeMethod(email: string) {
    return this.http.get(environment.BASE_URL_WEBSITE+'api/v1.0/subscriber/add',{
      params :{email : email},
    });

  }
}

