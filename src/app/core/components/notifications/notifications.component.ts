import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  host: {
    "class":"page-wrapper"
  }
})
export class NotificationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
