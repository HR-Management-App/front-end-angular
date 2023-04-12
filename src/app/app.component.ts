import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, from, of, throwError, Observable } from 'rxjs';
import { ApplicationService } from './services/application.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
    // let tokenStr: string = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlbXBsb3llZTExMTEiLCJ1c2VyX2lkIjo3LCJlbWFpbCI6InRlc3QxMjM1NDVAdGVtbC5uZXQiLCJwZXJtaXNzaW9ucyI6W3siYXV0aG9yaXR5IjoiZW1wbG95ZWUifV19.dIdNlk1eaKVg7Zwzc0TwBCTipMil_-VduBgA0FZqjL0";
    // sessionStorage.setItem('token', tokenStr);
    // sessionStorage.setItem('user_id', "7");
    // sessionStorage.setItem('user_email', "test123545@teml.net");
    // console.log(sessionStorage.getItem('token'));
    // this.applicationService.getEmployeeID(7).subscribe({
    //   next: (data) => {
    //     console.log("uploaded" + JSON.stringify(data));
    //     let json = JSON.stringify(data);
    //     let obj = JSON.parse(json);
    //     console.log(obj.emp_id);
    //     sessionStorage.setItem("emp_id", obj.emp_id);
    //   }
    // });
  }



}
