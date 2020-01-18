import { Component, OnInit } from '@angular/core';
import { Notification } from '../models/notification';
import { NotificationsClientService } from '../services/notifications-client.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notifications: Notification[] = [];
  /*show = false;
  @Output() showedNotifications = new EventEmitter();*/

  constructor(private client: NotificationsClientService) {
  }

  ngOnInit() {
    this.client.getNotifications().subscribe(notifications => {
      console.log('received notifications from server: ');
      console.log(notifications);
      this.notifications = notifications;
    });

    const item = new NoParams();
    item.name = 'Alex';
    item.age = 29;
  }
  
}

class NoParams {
  name: string;
  age: number;
}
