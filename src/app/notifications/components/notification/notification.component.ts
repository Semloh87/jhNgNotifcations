import { Component, OnInit, Input, HostBinding  } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { NotificationQueueService } from '../../notification-queue.service';
import { Notification } from '../../interface/notification.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20%)' }),
        animate(300)
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave', [
        style({opacity: 0, transform: 'translateX(20%)'}),
        animate(300)
      ])
    ])
  ]
})
export class NotificationComponent implements OnInit {
  @Input() notification: Notification;
  subscriber;
  progress = 0;
  constructor(
    private nqs: NotificationQueueService
  ) {
  }

  ngOnInit() {
    const timer = interval(50);
    this.subscriber = timer.pipe(takeWhile(i => i <= 100))
    .subscribe((i) => {
      this.progress = i;
      if (i === 100) {
        this.nqs.deleteNotification(this.notification.id);
      }
    });
  }

}
