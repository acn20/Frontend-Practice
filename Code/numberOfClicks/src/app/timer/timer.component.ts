import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  intervalHandler: any;
  timer: number = 10;
  @Output() timerStopped = new EventEmitter<any>();
  @Output() timerStarted = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  startTimer() {
    this.start();
    this.timerStarted.emit();
  }

  start() {
    this.intervalHandler = setInterval(function () {
      this.timer--;
    }, 1000);//o data la 1000 de milisecunde
  }

  stop() {
    if (this.timer == 0) {
      clearInterval(this.intervalHandler);
      this.timerStopped.emit();
    }
  }

}
