import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@coffee-core/services';

@Component({
  selector: 'cp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthenticationService) { }
  ngOnInit() { }
}
