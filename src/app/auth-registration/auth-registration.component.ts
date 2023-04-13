import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from '../services/application.service';
import { AuthenticationService } from '../services/authentication.service';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emptyValidator } from '../services/empty.validator';
import { SignupRequest } from '../domain/Authentication/singupRequest';

@Component({
  selector: 'auth-registration/:registrationToken',
  templateUrl: './auth-registration.component.html',
  styleUrls: ['./auth-registration.component.css']
})
export class AuthRegistrationComponent implements OnInit {
  isLoaded: boolean = false;
  registrationToken: string;

  constructor(private service: AuthenticationService,
    private _router: ActivatedRoute,
    private appService: ApplicationService) { }

  ngOnInit(): void {
    console.log("Goes to ngOnInit");
    this._router.params.subscribe( params => {
      console.log(params);
      let json = JSON.stringify(params);
      this.registrationToken = JSON.parse(json).registrationToken;
    });
    console.log("this.registrationToken is: " + this.registrationToken);
  }

  fBuilder = new FormBuilder().group({
    username: ['', emptyValidator()],
    email: ['', emptyValidator()],
    password: ['', emptyValidator()]
  });

  onClick() {
    let request = new SignupRequest(
      this.fBuilder.controls['username'].value,
      this.fBuilder.controls['email'].value,
      this.fBuilder.controls['password'].value
    );

    this.service.userRegistration(request, this.registrationToken).subscribe( {
      next: (data) => {
        console.log(JSON.stringify(data));
        let json = JSON.stringify(data);
        this.appService = JSON.parse(json).status;
        alert('Result for is as follows: \n' + JSON.stringify(data));
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

}
