import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '@coffee-core/services';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {
  return: string = '';
  constructor(private authService: AuthService,
    private db: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    // Redirect to the linke entered before authenticating
    this.return = this.route.snapshot.queryParamMap.get('return') || '/';
  }
}
