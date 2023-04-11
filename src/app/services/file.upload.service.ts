import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadResponse } from '../response/upload-response.model';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient: HttpClient) { }

  upload(file: File, folder: string): Observable<UploadResponse> {

    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('folder', folder);

    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'))
    return this.httpClient.post<UploadResponse>('http://localhost:8080/composite/upload', formData, { 'headers': headers });
  }
}
