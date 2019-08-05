import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { timer, Observable, Subscription } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  count: number = 10;
  @Output() timerStarted = new EventEmitter<any>();
  @Output() timerStopped = new EventEmitter<any>();
  @Output() timerTicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    // let f = (i) => console.log;

    // f(2); // console.log(2)
  }

  startTimer() {
    const timerObservable: Observable<number> = timer(1000, 1000);
    const subscription: Subscription = timerObservable.subscribe(i => {
      this.timerTicked.emit();
      this.count--;

      if (this.count == 0) {
        // stop the timer
        this.timerStopped.emit();
        subscription.unsubscribe();
      }
    });

    this.timerStarted.emit();
  }
}
