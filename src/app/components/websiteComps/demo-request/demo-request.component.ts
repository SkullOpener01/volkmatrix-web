import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AlertService} from "../../../services/alert.service";
import {NavbarComponent} from "../navbar/navbar.component";
import {FooterComponent} from "../footer/footer.component";
import {NgIf} from "@angular/common";
import {SharedService} from "../../../services/shared.service";
import {WebsiteService} from "../website.service";

@Component({
  selector: 'app-demo-request',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NavbarComponent,
    FooterComponent,
    NgIf
  ],
  templateUrl: './demo-request.component.html',
  styleUrl: './demo-request.component.scss'
})
export class DemoRequestComponent {

  requestForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public alertService: AlertService, public shredService : SharedService, private websiteService : WebsiteService) {
    this.requestForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$')]), // Optional: Ensure only numbers are allowed
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
      wapNotification: [false],
      connectExpert: [false, Validators.requiredTrue],
      keepInformed: [false]
    })
  }

  submit() {


    if (this.requestForm.value.name == null || this.requestForm.value.name == '') {
      this.alertService.showAlert("please enter full name", "warning")
      return;
    }
    if (this.requestForm.value.email == null || this.requestForm.value.email == '') {
      this.alertService.showAlert("please enter valid email", "danger")
      return;
    }
    if (this.requestForm.value.message == null || this.requestForm.value.message == '') {
      this.alertService.showAlert("please enter a message ", "danger")
      return;
    }

    if (this.requestForm.value.connectExpert == false) {
      this.alertService.showAlert(" You must agree to connect with an expert.", "warning")
      return;
    }

    if (this.requestForm.invalid) {
      this.alertService.showAlert("please enter valid details", "danger")
      return;
    }

    console.log("request form {}", this.requestForm.value);
    // this.alertService.showAlert("Demo requested successfully", "success");


    this.websiteService.demoRequestNew(this.requestForm.value).subscribe({
      next : (response: any) => {
        if (response.statusCode == 200) {
          this.alertService.showApiAlert(response.message, "success");
          setTimeout(() => {
            this.requestForm.reset();
            window.location.href = '/web';
          }, 3000);

        }
      },
      error: (error: any) => {
        this.alertService.showApiAlert(error.message, "danger");
      }
    });



  }


  testAlert() {
    this.alertService.showApiAlert("Details saved successfully", "error");
  }
}
