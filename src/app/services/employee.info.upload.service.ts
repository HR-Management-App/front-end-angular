import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../domain/EmployeeService/employee';
import { UploadResponse } from '../response/upload-response.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeInfoUploadService {

  constructor(private httpClient: HttpClient) { }

  uploadEmployeeToDb(emp: Employee): Observable<UploadResponse> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(emp);
    return this.httpClient.post<UploadResponse>('http://localhost:8080/composite/uploadEmpInfo', body, { 'headers': headers });
  }
}
