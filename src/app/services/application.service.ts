import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Application } from '../domain/Application';

// Declare where this service is available for use
@Injectable({ providedIn: 'root' })
export class ApplicationService {

    constructor(private httpClient: HttpClient) { }

    run(): Observable<string> {
        const headers = new HttpHeaders()
            .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'))

        return this.httpClient.get<string>('http://localhost:8080/composite/status', { 'headers': headers });
    }

    getEmployeeID(user_id: number): Observable<string> {
        const headers = new HttpHeaders()
            .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'))

        return this.httpClient.get<string>('http://localhost:8080/composite/' + user_id, { 'headers': headers });
    }

    getDigitalPath(type: string): Observable<string> {
        const headers = new HttpHeaders()
            .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'))

        return this.httpClient.get<string>('http://localhost:8080/composite/digital?type=' + type,
            { 'headers': headers });
    }



}