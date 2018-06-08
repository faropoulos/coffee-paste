import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '@coffee-core/services';

@Component({
  selector: 'app-user',
  templateUrl: './app-user.component.html',
  styleUrls: ['./app-user.component.scss']
})
export class AppUserComponent implements OnInit, OnDestroy {
  user: any = {};
  userSubscription: Subscription;
  constructor(private authService: AuthService) { }
  ngOnInit() {
    this.userSubscription = this.authService.user.subscribe(user =>  this.user = user);
  }
  ngOnDestroy() {
    this.userSubscription && this.userSubscription.unsubscribe();
  }
  signOut() {
    this.authService.logout();
  }
}
