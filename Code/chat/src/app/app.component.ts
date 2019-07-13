import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat';

  message: string = '';
  sentMessages: Array<string> = [];

  sendMessage() {
    this.sentMessages.push(this.message);
  }

}
