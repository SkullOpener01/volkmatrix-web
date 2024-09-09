import { Component } from '@angular/core';
import {NavbarComponent} from "../../navbar/navbar.component";
import {FooterComponent} from "../../footer/footer.component";

@Component({
  selector: 'app-sms',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './sms.component.html',
  styleUrl: './sms.component.scss'
})
export class SmsComponent {

}
