import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationWrapperComponent } from './components/notification-wrapper/notification-wrapper.component';
import { NotificationComponent } from './components/notification/notification.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    NotificationWrapperComponent,
    NotificationComponent
  ],
  exports: [
    NotificationWrapperComponent
  ]
})
export class NotificationsModule { }
