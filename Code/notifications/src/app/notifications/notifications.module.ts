import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationsClientService } from './services/notifications-client.service';

@NgModule({
  declarations: [
    NotificationsComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    NotificationsClientService
  ],
  exports: [
    NotificationsComponent
  ]
})
export class NotificationsModule { }
