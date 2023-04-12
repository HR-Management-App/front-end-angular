import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-employees-panel',
  templateUrl: './employees-panel.component.html',
  styleUrls: ['./employees-panel.component.css'],
})
export class EmployeesPanelComponent {
  employees: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    const token =
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJocjEiLCJ1c2VyX2lkIjoxLCJlbWFpbCI6ImhyMUB0ZXN0LmNvbSIsInBlcm1pc3Npb25zIjpbeyJhdXRob3JpdHkiOiJlbXBsb3llZSJ9LHsiYXV0aG9yaXR5IjoiaHIifV19.rickDdG3Y1ONVgeBV1UGdMbzS2ZjyXt_EpbWSEKtPhA';
    // Add the token to the request headers
    const authorization = new HttpHeaders().set(
      'Authorization',
      `Bearer ${token}`
    );
    console.log('header' + authorization.get('Authorization'));

    this.http
      .get<any[]>('http://localhost:8010/employee-service/employees', {
        headers: authorization,
      })
      .subscribe((res) => {
        this.employees = res;
        console.log(res);
      });
  }
}