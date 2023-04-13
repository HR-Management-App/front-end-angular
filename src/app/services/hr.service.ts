import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HrService {
  constructor(private httpClient: HttpClient) {}

  getEmployeeProfile(url: string): Observable<any[]> {
    // const headers = new HttpHeaders().set(
    //   'Authorization',
    //   'Bearer ' + sessionStorage.getItem('token')
    // );

    const token =
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJocjEiLCJ1c2VyX2lkIjoxLCJlbWFpbCI6ImhyMUB0ZXN0LmNvbSIsInBlcm1pc3Npb25zIjpbeyJhdXRob3JpdHkiOiJlbXBsb3llZSJ9LHsiYXV0aG9yaXR5IjoiaHIifV19.rickDdG3Y1ONVgeBV1UGdMbzS2ZjyXt_EpbWSEKtPhA';
    // Add the token to the request headers
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${token}`
    );

    return this.httpClient.get<any[]>(url, { headers: headers });
  }
}
