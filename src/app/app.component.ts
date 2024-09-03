import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AlertComponent} from "./components/alert/alert.component";
import {NavbarComponent} from "./components/websiteComps/navbar/navbar.component";
import {FooterComponent} from "./components/websiteComps/footer/footer.component";
import {HomeComponent} from "./components/websiteComps/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, AlertComponent, NavbarComponent, FooterComponent, HomeComponent],
  imports: [RouterOutlet, AlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'volkMatrixNew';
}
