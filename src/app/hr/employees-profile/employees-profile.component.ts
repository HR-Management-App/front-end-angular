import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { employeeProfile } from 'app/domain/EmployeeService/employeeProfile';

@Component({
  selector: 'app-employees-profile',
  templateUrl: './employees-profile.component.html',
  styleUrls: ['./employees-profile.component.css'],
})
export class EmployeesProfileComponent {
  employee: employeeProfile;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      const token =
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJocjEiLCJ1c2VyX2lkIjoxLCJlbWFpbCI6ImhyMUB0ZXN0LmNvbSIsInBlcm1pc3Npb25zIjpbeyJhdXRob3JpdHkiOiJlbXBsb3llZSJ9LHsiYXV0aG9yaXR5IjoiaHIifV19.rickDdG3Y1ONVgeBV1UGdMbzS2ZjyXt_EpbWSEKtPhA';
      const authorization = new HttpHeaders().set(
        'Authorization',
        `Bearer ${token}`
      );

      this.http
        .get<employeeProfile>(`http://localhost:8010/employee-service/profile/${id}`, {
          headers: authorization,
        })
        .subscribe((res) => {
          this.employee = res;
          console.log(res);
        });
    });
  }
}
