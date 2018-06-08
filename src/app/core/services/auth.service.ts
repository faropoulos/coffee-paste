import { Injectable } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
  }
  signup(form: any) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(form.value.email, form.value.password)
      .then(res => {
        console.log('Success!', res);
        this.router.navigate(['/']);        
      }).catch(err => {
        console.log(err);
        this.handleFormErrors(form, err);
      });    
  }
  login(form: FormGroup, redirect: string) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(form.value.email, form.value.password)
      .then(res => {
        console.log('Nice, it worked!', res);
        this.router.navigate([redirect]);
      }).catch(err => {
        console.log(err);
        this.handleFormErrors(form, err);
      });
  }
  logout() {
    this.firebaseAuth.auth.signOut();
    this.router.navigate(['/login']);
  }
  handleFormErrors(form, err) {
    switch(err.code) {
      case 'auth/wrong-password':
        form.controls.password.setErrors({'invalid': true});
        break;
      case 'auth/user-not-found':
        form.controls.email.setErrors({'invalid': true});
        break;
      case 'auth/email-already-in-use':
        form.controls.email.setErrors({'invalid': true});
        break;
      case 'auth/weak-password':
        form.controls.password.setErrors({'weak': true});
        break;
    }
  }
}