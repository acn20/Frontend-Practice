import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DigitNotificationService } from '../digit-notification.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {
  numberDialed: Array<string> = [];

  constructor(private digitNotification: DigitNotificationService) { }

  ngOnInit() {
    const observable = this.digitNotification.onDigitClick();
    observable.subscribe((text: string) => {
      this.numberDialed.push(text);
    });
  }

}
