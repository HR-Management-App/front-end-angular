import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface LoginCredentials {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  credentials: LoginCredentials = {
    username: '',
    password: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    this.http.post('http://localhost:7070/login', this.credentials).subscribe(
      response => {
        console.log('Login successful', response);
        // Perform further actions, e.g., navigate to another page
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}
