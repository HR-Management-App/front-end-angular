import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileDetails } from '../domain/file-details.model';
import { UploadResponse } from '../response/upload-response.model';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  // private baseUrl = "http://localhost:8080"
  constructor(private httpClient: HttpClient) { }

  upload(file: File): Observable<UploadResponse> {

    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.httpClient.post<UploadResponse>('http://localhost:8080/composite/upload', formData);
  }
}
