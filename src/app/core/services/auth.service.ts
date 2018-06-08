import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  constructor(private firebaseAuth: AngularFireAuth,
    private router: Router) {
    this.user = firebaseAuth.authState;
  }
  signup(email: string, password: string, form: any) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Success!', res);
        this.router.navigate(['/']);        
      }).catch(err => {
        if(form){
          if(err.error.type === 'password'){
            form.controls.password.setErrors({'invalid': true});
          }else if(err.error.type === 'email'){
            form.controls.email.setErrors({'invalid': true});
          }
        }
        console.log('Something went wrong:',err.message);
      });    
  }
  login(email: string, password: string , redirect: string, form: any) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Nice, it worked!', res);
        this.router.navigate([redirect]);
      }).catch(err => {
        if(form){
          if(err.error.type === 'password'){
            form.controls.password.setErrors({'invalid': true});
          }else if(err.error.type === 'email'){
            form.controls.email.setErrors({'invalid': true});
          }
        }
        console.log('Something went wrong:',err.message);
      });
  }
  logout() {
    this.firebaseAuth.auth.signOut();
    this.router.navigate(['/login']);
  }
}