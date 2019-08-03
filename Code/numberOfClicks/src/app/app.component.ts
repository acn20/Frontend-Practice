import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'numberOfClicks';
  counter: number;
  timerStopped = false;
  startTimer = false;

  timerStarted() {
    this.startTimer = true;
  }

  clickedOnce() {
    this.counter++;
  }

  stoppedTimer() {
    this.timerStopped = true;
  }
}
