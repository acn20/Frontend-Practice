import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongNotificationService {
  private nextSubject = new Subject<any>();// used to emit some sort of events. very similar to EventEmitter
  private previousSubject = new Subject<any>();

  playNext() {
    // here the subject will notify all the observables that it created in the onNext() method below
    // when someone uses the Observable that is created by asObservable() below, nextSubject has the ability
    // to notify the observable
    // similarly for onPrevious
    this.nextSubject.next();
  }

  playPrevious() {
    this.previousSubject.next();
  }

  onNext(): Observable<any> {
    return this.nextSubject.asObservable();
  }

  onPrevious(): Observable<any> {
    return this.previousSubject.asObservable();
  }
}
