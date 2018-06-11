import { Component, OnInit } from '@angular/core';

import { EmptyState } from '@coffee-core/models';

@Component({
  selector: 'app-notifications',
  templateUrl: './app-notifications.component.html',
  styleUrls: ['./app-notifications.component.scss']
})
export class AppNotificationsComponent implements OnInit {
  hasNewNotifications: boolean = true;
  unseenNotifications: number = 14;
  emptyState: EmptyState;
  constructor() { }
  ngOnInit() {
    this.emptyState = new EmptyState({
      icon: 'notifications_none',
      title: 'All Caught Up!',
      subtitle: 'We\'ll let you know when there is something new for you.'
    });
  }
}
