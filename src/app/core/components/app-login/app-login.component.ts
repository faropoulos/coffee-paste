import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { environment } from '@coffee-environments/environment';

import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '@coffee-core/services';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {
  EMAIL_REGEX: string = environment.application.helpers.emailRegex;
  return: string = '';
  loginForm: FormGroup;
  passwordType: string = 'password';
  visibilityIcon: string = 'visibility';
  constructor(private authService: AuthService,
    private db: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    // Redirect to the link entered before authenticating
    this.return = this.route.snapshot.queryParamMap.get('return') || '/';
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.EMAIL_REGEX)
      ]),
      password: new FormControl(null, Validators.required)
    });
  }
  togglePasswordVisibility(ev) {
    ev.stopPropagation();
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    this.visibilityIcon = this.passwordType === 'password' ? 'visibility' : 'visibility_off';
  }
  onSubmit(){
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value.email,
      this.loginForm.value.passowrd,
      this.return,
      this.loginForm);
    // const user = new User(this.loginForm.value.email, this.loginForm.value.password);
    // this.authService.signin(user, this.loginForm);
  }
}
