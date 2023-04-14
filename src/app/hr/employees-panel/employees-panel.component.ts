import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Form } from '@angular/forms';
import { HrService } from 'app/services/hr.service';

@Component({
  selector: 'app-employees-panel',
  templateUrl: './employees-panel.component.html',
  styleUrls: ['./employees-panel.component.css'],
})
export class EmployeesPanelComponent {
  employees: any[] = [];
  searchType: string = 'email';
  searchTerm: string = '';

  default_url = 'http://localhost:8082/hr-service/hr-service/employees';
  url_prefix = 'http://localhost:8082/hr-service/hr-service/summary?';

  constructor(private http: HttpClient, private hrService: HrService) { }

  ngOnInit() {
    // const token =
    //   'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJocjEiLCJ1c2VyX2lkIjoxLCJlbWFpbCI6ImhyMUB0ZXN0LmNvbSIsInBlcm1pc3Npb25zIjpbeyJhdXRob3JpdHkiOiJlbXBsb3llZSJ9LHsiYXV0aG9yaXR5IjoiaHIifV19.rickDdG3Y1ONVgeBV1UGdMbzS2ZjyXt_EpbWSEKtPhA';
    // Add the token to the request headers
    const token = sessionStorage.getItem('token');
    const authorization = new HttpHeaders().set(
      'Authorization',
      `Bearer ${token}`
    );
    console.log('header' + authorization.get('Authorization'));

    this.http
      .get<any[]>(this.default_url, {
        headers: authorization,
      })
      .subscribe((res) => {
        this.employees = res;
        console.log(res);
      });
  }

  onSubmit() {
    console.log('Search type:', this.searchType);
    console.log('Search term:', this.searchTerm);
    this.getEmployeeSummary(this.searchTerm, this.searchType);
    // Perform search logic here
  }

  getEmployeeSummary(input: string, searchType: string): void {
    let url: string = '';
    if (input == '') {
      url = this.default_url;
    } else {
      if (searchType == 'email') {
        url = this.url_prefix + 'email=' + input;
      } else {
        //by name
        url = this.url_prefix + 'name=' + input;
      }
    }
    console.log('url ' + url);
    this.hrService.getEmployeeProfile(url).subscribe((res) => {
      this.employees = res;
      console.log(res);
    });
  }
}
