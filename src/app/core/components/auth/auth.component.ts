import { Component, OnInit } from '@angular/core';
import { AuthService } from '@coffee-core/services';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'cp-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthService, private db: AngularFirestore) { }
  ngOnInit() { }
}
