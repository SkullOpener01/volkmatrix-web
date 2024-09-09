import { Component } from '@angular/core';
import {NavbarComponent} from "../../navbar/navbar.component";
import {FooterComponent} from "../../footer/footer.component";

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss'
})
export class EmailComponent {

}
