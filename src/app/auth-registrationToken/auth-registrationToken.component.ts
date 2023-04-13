import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from '../services/application.service';
import { AuthenticationService } from '../services/authentication.service';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emptyValidator } from '../services/empty.validator';
import { NewTokenRequest } from '../domain/Authentication/newTokenRequest';

@Component({
  selector: 'auth-registrationToken',
  templateUrl: './auth-registrationToken.component.html',
  styleUrls: ['./auth-registrationToken.component.css']
})
export class AuthRegistrationTokenComponent implements OnInit {
  // tableOfContent: any;
  isLoaded: boolean = false;

  constructor(private service: AuthenticationService,
    private _router: ActivatedRoute
    ) { } //private appService: ApplicationService

  ngOnInit(): void {

    // this.service.getAllRegistrationToken().subscribe(
    //   (data : any) => {
    //     this.tableOfContent = data;
    //   }
    // )
  }

  fBuilder = new FormBuilder().group({
    email: ['', emptyValidator()]
  });

  onClick() {
    let request = new NewTokenRequest(
      this.fBuilder.controls['email'].value
    );

    this.service.tokenGeneration(request).subscribe( {
      next: (data) => {
        console.log(JSON.stringify(data));
        let json = JSON.stringify(data);
        // this.appService = JSON.parse(json).status;
        alert(JSON.parse(json).message);
      },
      error: (e) => {
        console.log(e);
        let json = JSON.stringify(e);
        alert(JSON.parse(json).message);
      }
    });
  }




}
