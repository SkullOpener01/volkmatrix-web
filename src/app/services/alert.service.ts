import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alertSubject = new Subject<any>();
  alert$ = this.alertSubject.asObservable();

  showAlert(message: string, type: 'success' | 'danger' |'dark' | 'warning' | 'secondary' | 'primary') {
    console.log('AlertService: showAlert called with', message, type);
    this.alertSubject.next({ message, type });
  }
}
