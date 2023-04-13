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

        console.log(body);

        return this.httpClient.post<AuthResponse>('http://localhost:7070/login', body, { 'headers': headers });
    }

    userRegistration(signupRequest: SignupRequest, token: string): Observable<AuthResponse> {

      const body = JSON.stringify(signupRequest);
      const headers = new HttpHeaders().set('content-type', 'application/json');

      return this.httpClient.post<AuthResponse>('http://localhost:7070/signup/' + token, body, { 'headers': headers });
    }

    tokenGeneration(newTokenRequest : NewTokenRequest) : Observable<AuthResponse> {

      console.log("Test whether jwt token exist: " + sessionStorage.getItem('token'));

      const body = JSON.stringify(newTokenRequest);
      const headers = new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
        // .set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJocjEiLCJ1c2VyX2lkIjoxLCJlbWFpbCI6ImhyMUB0ZXN0LmNvbSIsInBlcm1pc3Npb25zIjpbeyJhdXRob3JpdHkiOiJociJ9LHsiYXV0aG9yaXR5IjoiZW1wbG95ZWUifV19.3IOm2C8ZdS3XhWCQPi7EsKY7r4dZjoNM8aAuzU60cIE');

      return this.httpClient.post<AuthResponse>('http://localhost:7070/token/new', body, { 'headers': headers });
    }

    getAllRegistrationToken() {
      return this.httpClient.get<AuthResponse>('http://localhost:7070/token/all');
    }


}
