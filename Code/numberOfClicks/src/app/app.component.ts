import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'numberOfClicks';
  counter: number;
  numberOfSeconds: number = 0;
  timerStopped = false;
  timerStarted = false;

  startedTimer() {
    this.timerStarted = true;
  }

  stoppedTimer() {
    this.timerStopped = true;
  }

  clickedSquare() {
    this.counter++;
  }

  onTick() {
    this.numberOfSeconds++;
  }
}
