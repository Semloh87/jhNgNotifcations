import { Component, OnInit } from '@angular/core';
import { NotificationQueueService } from '../../services/notification-queue.service';
import { Notification } from '../../interface/notification.model';

@Component({
  selector: 'app-notification-wrapper',
  templateUrl: './notification-wrapper.component.html',
  styleUrls: ['./notification-wrapper.component.scss']
})
export class NotificationWrapperComponent implements OnInit {
  notifications: Notification[] = [];
  constructor(
    private nqs: NotificationQueueService
  ) { }

  ngOnInit() {
    this.nqs.getNotifications().subscribe(
      notifications => {
        this.notifications = notifications;
      }
    );
  }

}
