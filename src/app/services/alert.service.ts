import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alertSubject = new Subject<any>();
  alert$ = this.alertSubject.asObservable();

  // showAlert(message: string, type: 'success' | 'danger' |'dark' | 'warning' | 'secondary' | 'primary') {
  //   this.alertSubject.next({ message, type});
  // }

  // Trigger a simple alert
  showAlert(message: string, type: 'success' | 'danger' |'dark' | 'warning' | 'secondary' | 'primary') {
    this.alertSubject.next({ message, type, notificationType: 'alert' });
  }

  // Trigger the API Popup alert
  showApiAlert(message: string, type: 'success' | 'danger' |'dark' | 'warning' | 'secondary' | 'primary' |'error') {
    this.alertSubject.next({ message, type, notificationType: 'apiPopup' });
  }
}
