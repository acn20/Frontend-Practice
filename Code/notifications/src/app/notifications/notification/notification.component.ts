import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Notification } from '../models/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @Input() notification: Notification;

  constructor() { }

  ngOnInit() {
  }

}
