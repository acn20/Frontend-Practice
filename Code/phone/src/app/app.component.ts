import { Component, Input } from '@angular/core';
import { DigitNotificationService } from './digit-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'phone';

  constructor(private digitNotification: DigitNotificationService) { }

  btnClicked(value: string) {
    this.digitNotification.pressedDigit(value);
  }
}
