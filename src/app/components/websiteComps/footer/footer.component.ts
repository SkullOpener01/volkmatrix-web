import { Component } from '@angular/core';
import {subscribe} from "node:diagnostics_channel";
import {FormBuilder, FormsModule} from "@angular/forms";
import {WebsiteService} from "../website.service";
import {AlertService} from "../../../services/alert.service";
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  email: string = '';

  constructor(private websiteService : WebsiteService, private alertService : AlertService, private shredService : SharedService) {}

  subscribe() {
    if (this.email) {
      const payload = {email: this.email};

      this.websiteService.subscribeMethod(this.email).subscribe({
        next: (response: any) => {
          if (response.statusCode == 200) {
            this.alertService.showApiAlert(response.message, "success");
            setTimeout(() => {
              window.location.href = '/web';
            },5000);
          } else {
            this.email = '';
            this.alertService.showApiAlert(response.message, "error");

          }

        },  error: (error: any) => {
          this.alertService.showApiAlert(error.message, "danger");
        }
      });

    }else{
      this.alertService.showAlert("Please enter a valid email address", "dark");
      return;
    }
  }
}
