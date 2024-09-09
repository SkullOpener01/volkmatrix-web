import { Component } from '@angular/core';
import {FooterComponent} from "../../footer/footer.component";
import {NavbarComponent} from "../../navbar/navbar.component";

@Component({
  selector: 'app-voice',
  standalone: true,
    imports: [
        FooterComponent,
        NavbarComponent
    ],
  templateUrl: './voice.component.html',
  styleUrl: './voice.component.scss'
})
export class VoiceComponent {

}
