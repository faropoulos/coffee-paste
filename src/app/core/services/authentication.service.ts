import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;
  constructor(private firebaseAuth: AngularFireAuth,
    private router: Router) {
    this.user = firebaseAuth.authState;
  }
  signup(email: string, password: string) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Success!', res);
        this.router.navigate(['/']);        
      }).catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }
  login(email: string, password: string) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Nice, it worked!', res);
        this.router.navigate(['/']);
      }).catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }
  logout() {
    this.firebaseAuth.auth.signOut();
    this.router.navigate(['/login']);
  }
}