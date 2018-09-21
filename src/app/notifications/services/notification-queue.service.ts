import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Notification } from './../interface/notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationQueueService {
  notificationQueue = new Subject<Notification[]>();
  notifications: Notification[] = [];
  constructor() { }

  getNotifications() {
    return this.notificationQueue.asObservable();
  }

  addNotification(type: string, title: string, content: string) {
    const newNotiifcation = new Notification(type, title, content);
    this.notifications.push(newNotiifcation);
    this.updateQueue();
  }

  deleteNotification(id: string) {
    this.notifications = this.notifications.filter(n => n.id !== id);
    this.updateQueue();
  }

  updateQueue() {
    this.notificationQueue.next(this.notifications);
  }
}
