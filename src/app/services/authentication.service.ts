import { NewTokenRequest } from './../domain/Authentication/newTokenRequest';
import { SignupRequest } from './../domain/Authentication/singupRequest';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Application } from '../domain/Application';
import { AuthResponse } from '../response/auth-response.model';
// import { LoginCredential } from '../domain/Authentication/loginCredential';

interface LoginCredentials {
  username: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private httpClient: HttpClient) { }

    userValidation(credentials: LoginCredentials): Observable<AuthResponse> {

        const body = JSON.stringify(credentials);
        const headers = new HttpHeaders().set('content-type', 'application/json');

        return this.httpClient.post<AuthResponse>('http://localhost:7070/login', body, { 'headers': headers });
    }

    userRegistration(signupRequest: SignupRequest, token: string): Observable<AuthResponse> {

      const body = JSON.stringify(signupRequest);
      const headers = new HttpHeaders().set('content-type', 'application/json');

      return this.httpClient.post<AuthResponse>('http://localhost:7070/signup' + token, body, { 'headers': headers });
    }

    tokenGeneration(newTokenRequest : NewTokenRequest) : Observable<AuthResponse> {

      const body = JSON.stringify(newTokenRequest);
      const headers = new HttpHeaders().set('content-type', 'application/json');

      return this.httpClient.post<AuthResponse>('http://localhost:7070/token/new', body, { 'headers': headers });
    }

    getAllRegistrationToken() {
      return this.httpClient.get<AuthResponse>('http://localhost:7070/token/all');
    }


}
