import { NotificationQueueService } from './notifications/services/notification-queue.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notifications';

  constructor(private notificatioQueueService: NotificationQueueService) {}

  sendSuccessNotification() {
    this.notificatioQueueService.addNotification('success', 'Well done!', 'That went really well');
  }

  sendWarningNotification() {
    this.notificatioQueueService.addNotification('warn', 'That is odd!', 'Something went missing');
  }

  sendErrorNotification() {
    this.notificatioQueueService.addNotification('error', 'Oh No!', 'That didn\'t go well at all');
  }


}
