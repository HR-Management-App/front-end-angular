import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from '../services/application.service';
import { AuthenticationService } from '../services/authentication.service';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emptyValidator } from '../services/empty.validator';
import { SignupRequest } from '../domain/Authentication/singupRequest';

@Component({
  selector: 'app-auth-registration',
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

    // this._router = [{ path: 'signup/:registrationToken', component: AuthRegistrationComponent }];

    this._router.params.subscribe(params => {
      this.registrationToken = params.get('token');
      console.log("Registration Token: " + this.registrationToken);
    });
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
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

}
