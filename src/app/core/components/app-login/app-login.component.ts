import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { environment } from '@coffee-environments/environment';

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
  constructor(private authService: AuthService, private route: ActivatedRoute) { }
  ngOnInit() {
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
    this.authService.login(this.loginForm, this.return);
  }
}
