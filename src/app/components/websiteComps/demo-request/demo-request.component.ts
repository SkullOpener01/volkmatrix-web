import {Component, OnInit} from '@angular/core';
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
export class DemoRequestComponent implements OnInit {

  requestForm: FormGroup;
  minDate!: string;
  isPastDateSelected = false;

  constructor(private formBuilder: FormBuilder, public alertService: AlertService, public shredService: SharedService, private websiteService: WebsiteService) {
    this.requestForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$')
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
      demoDate: [null, Validators.required],
      demoTime: [null, Validators.required],
      wapNotification: [false],
      connectExpert: [false, Validators.requiredTrue],
      keepInformed: [false]
    });
  }

  ngOnInit() {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];  // yyyy-mm-dd format for HTML5 date input

    this.requestForm.get('demoDate')?.valueChanges.subscribe(date => {
      if (date) {
        this.checkIfPastDateSelected(date);
      }
    });
  }

  formatTimeTo12Hour(time: string): string {
    const [hourString, minute] = time.split(':');
    let hour = parseInt(hourString, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';

    // Convert 24-hour format to 12-hour format
    hour = hour % 12;
    hour = hour ? hour : 12; // If hour is 0, make it 12

    const formattedTime = `${('0' + hour).slice(-2)}:${minute} ${ampm}`;
    return formattedTime;
  }

  checkIfPastDateSelected(date: string) {
    const today = new Date();
    const selectedDate = new Date(date);

    // If the selected date is in the past, disable the time input
    this.isPastDateSelected = selectedDate < today;

    if (this.isPastDateSelected) {
      this.requestForm.get('demoTime')?.reset();
      this.requestForm.get('demoTime')?.disable();
    } else {
      this.requestForm.get('demoTime')?.enable();
    }
  }

  submit() {
    if (this.requestForm.invalid) {
      this.alertService.showAlert("Please enter valid details", "dark");
      return;
    }

    if (this.requestForm.value.connectExpert == false) {
      this.alertService.showAlert("You must agree to connect with an expert.", "dark");
      return;
    }

    const formValue = this.requestForm.value;
    formValue.demoTime = this.formatTimeTo12Hour(formValue.demoTime);

    // console.log("request form", this.requestForm.value);

    this.websiteService.demoRequestNew(this.requestForm.value).subscribe({
      next: (response: any) => {
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
}
