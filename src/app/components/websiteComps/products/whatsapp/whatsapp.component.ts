import { Component } from '@angular/core';
import {FooterComponent} from "../../footer/footer.component";
import {NavbarComponent} from "../../navbar/navbar.component";

@Component({
  selector: 'app-whatsapp',
  standalone: true,
  imports: [
    FooterComponent,
    NavbarComponent
  ],
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.scss'
})
export class WhatsappComponent {

}
