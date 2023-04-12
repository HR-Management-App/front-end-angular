import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../domain/EmployeeService/employee';
import { UploadResponse } from '../response/upload-response.model';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  uploadEmployeeToDb(emp: Employee): Observable<UploadResponse> {
    const body = JSON.stringify(emp);
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'))
      .set('content-type', 'application/json');
    return this.httpClient.post<UploadResponse>('http://localhost:8080/composite/uploadEmpInfo', body, { 'headers': headers });
  }

  upload(file: File, folder: string): Observable<UploadResponse> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('folder', folder);

    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'))
    return this.httpClient.post<UploadResponse>('http://localhost:8080/composite/upload', formData, { 'headers': headers });
  }

  download(filePath: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
    return this.httpClient.get(
      'http://localhost:8080/composite/download?filename=' + filePath,
      { 'headers': headers, responseType: 'blob' },
    );
  }

  getDocumentPath(emp_id: string, title: string): Observable<UploadResponse> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'))
    return this.httpClient.get<UploadResponse>(
      'http://localhost:8080/composite/document?emp_id=' + emp_id + '&title=' + title,
      { 'headers': headers });
  }

  getProfile(emp_id: number): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'))
    return this.httpClient.get<UploadResponse>(
      'http://localhost:8080/composite/' + emp_id + '/profile',
      { 'headers': headers });
  }
}
