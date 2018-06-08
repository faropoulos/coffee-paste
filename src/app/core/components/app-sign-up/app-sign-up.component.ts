import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { environment } from '@coffee-environments/environment';

import { AuthService } from '@coffee-core/services';

@Component({
  selector: 'app-sign-up',
  templateUrl: './app-sign-up.component.html',
  styleUrls: ['./app-sign-up.component.scss']
})
export class AppSignUpComponent implements OnInit {
  EMAIL_REGEX: string = environment.application.helpers.emailRegex;
  signupForm: FormGroup;
  passwordType: string = 'password';
  visibilityIcon: string = 'visibility';
  constructor(private authService: AuthService) { }
  ngOnInit() {
    this.signupForm = new FormGroup({
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
    this.authService.signup(this.signupForm);
  }
}
