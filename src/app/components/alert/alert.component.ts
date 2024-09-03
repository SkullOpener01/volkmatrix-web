import {Component, OnInit} from '@angular/core';
import {AlertService} from "../../services/alert.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  standalone: true,
  imports: [
    NgIf
  ],
  styleUrl: './alert.component.scss'
})
export class AlertComponent implements OnInit {
  message: string | null = null;
  type: string = 'success';
  progress: number = 100;


  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.alert$.subscribe(alert => {
      this.message = alert.message;
      this.type = alert.type;
      this.progress = 100;

      const duration = 5000; // 5 seconds
      const interval = 50; // 50 ms interval
      const decrement = 100 / (duration / interval);

      const intervalId = setInterval(() => {
        this.progress -= decrement;

        if (this.progress <= 0) {
          clearInterval(intervalId);
          this.closeAlert();
        }
      }, interval);
    });
  }

  closeAlert() {
    this.message = null;
    this.progress = 100;
  }
}
