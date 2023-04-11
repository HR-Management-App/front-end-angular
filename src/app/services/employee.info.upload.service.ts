import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../domain/EmployeeService/employee';
import { UploadResponse } from '../response/upload-response.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeInfoUploadService {

  constructor(private httpClient: HttpClient) { }

  uploadEmployeeToDb(emp: Employee): Observable<UploadResponse> {
    const body = JSON.stringify(emp);
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'))
      .set('content-type', 'application/json');
    return this.httpClient.post<UploadResponse>('http://localhost:8080/composite/uploadEmpInfo', body, { 'headers': headers });
  }
}
