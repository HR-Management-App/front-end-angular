import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Application } from '../domain/Application';

// Declare where this service is available for use
@Injectable({ providedIn: 'root' })
export class ApplicationService {

    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get('http://localhost:8080/composite/app');
    }

    subject = new Subject();

    onSubscribe() {
        return this.subject.asObservable();
    }

    // public getApplication(): Observable<Application> {
    //     return this.http.get<Application>('http://localhost:8080/composite/app');
    // }


}