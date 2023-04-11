import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Application } from '../domain/Application';

// Declare where this service is available for use
@Injectable({ providedIn: 'root' })
export class ApplicationService {

    constructor(private httpClient: HttpClient) { }

    run(): Observable<string> {
        console.log('hehe');
        const headers = new HttpHeaders()
            .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'))

        return this.httpClient.get<string>('http://localhost:8080/composite/status', { 'headers': headers });
    }

    // getData() {
    //     return this.http.get('http://localhost:8080/composite/status');
    // }

    // subject = new Subject();

    // onSubscribe() {
    //     return this.subject.asObservable();
    // }

    // // public getApplication(): Observable<Application> {
    // //     return this.http.get<Application>('http://localhost:8080/composite/app');
    // // }


}