import { Component, OnInit } from '@angular/core';

import { environment } from '@coffee-environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss'],
  host: {
    "class":"mat-elevation-z2"
  }
})
export class AppMenuComponent implements OnInit {
  logoUrl: string = environment.application.logoUrl; 
  constructor() { }
  ngOnInit() { }
}
