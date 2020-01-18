import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Notification } from '../models/notification';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsClientService {

  constructor(private httpClient: HttpClient) { }

  getNotifications(): Observable<Notification[]> {
    const notifications = [];
    notifications.push(new Notification('1', 'assets/images/img0.jpg', '2h'));
    notifications.push(new Notification('2', 'assets/images/img1.jpg', '4h'));
    notifications.push(new Notification('3', 'assets/images/img2.jpg', '18h'));
    notifications.push(new Notification('4', 'assets/images/img3.jpg', '3d'));

    return of(notifications);
    // we don't have a server yet, so we pretend that we called it, but instead
    // all we're doing is create an Observable using hardcoded data
    // return this.httpClient.get<Notification[]>('');
  }

  markAsRead(id: string): Observable<any> {
    return of({});
    // return this.httpClient.post('', { id: id });
  }
}
