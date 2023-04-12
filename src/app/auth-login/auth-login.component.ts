import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationService } from '../services/application.service';
import { AuthenticationService } from '../services/authentication.service';

interface LoginCredentials {
  username: string;
  password: string;
}

@Component({
  selector: 'auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

  constructor(private service: AuthenticationService,
    private _router: Router,
    private appService: ApplicationService) { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  credentials: LoginCredentials = {
    username: '',
    password: ''
  };

  onSubmit(): void {
    this.service.userValidation(this.credentials).subscribe( {
      next: (data) => {
        console.log(JSON.stringify(data));
        let json = JSON.stringify(data);
        this.appService = JSON.parse(json).status;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
}
