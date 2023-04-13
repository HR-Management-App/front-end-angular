import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private _router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('token')) { //already logged in
      if (sessionStorage.getItem('role') == 'user') {
        this._router.navigate(['/user-home']);
      } else {
        this._router.navigate(['/admin-home']);
      }
    }
  }

  credentials: LoginCredentials = {
    username: '',
    password: ''
  };

  onSubmit(): void {
    // sessionStorage.clear(); // for test
    this.service.userValidation(this.credentials).subscribe({
      next: (data) => {
        console.log(JSON.stringify(data));
        let json = JSON.stringify(data);
        let token = JSON.parse(json).data;
        let jwt_token = JSON.parse(token).jwt_token;
        let user_id = JSON.parse(token).user_id;
        console.log("jwt token: " + jwt_token);
        sessionStorage.setItem('token', jwt_token);
        console.log("user_id: " + user_id);
        sessionStorage.setItem('user_id', user_id);
      },
      complete: () => {
        if (sessionStorage.getItem('user_id') != null) {
          if (sessionStorage.getItem('user_id') == '1') {
            sessionStorage.setItem('role', 'hr');
            this._router.navigate(['/admin-home']);
          } else {
            // this._router.navigate(['/user-home']);
            this._router.navigate(['/user-nav-bar']);
            sessionStorage.setItem('role', 'user');
          }
        }
      },
      error: (e) => {
        console.log(e);
      }
    });



  }

  // const token = sessionStorage.ge
}
