import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DigitNotificationService {
  private newSubject = new Subject<string>();

  pressedDigit(text: string) {
    this.newSubject.next(text);
  }

  onDigitClick(): Observable<string> {
    return this.newSubject.asObservable();
  }
}
