import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  email : String
  password : String
  errorMessage : String

  constructor(private router : Router, private authService : AuthenticationService) { }

  login() {
    this.authService.login(this.email, this.password).catch(error => this.errorMessage = error.message);
  }

}
