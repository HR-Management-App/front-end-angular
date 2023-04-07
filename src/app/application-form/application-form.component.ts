import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emptyValidator } from '../services/empty.validator';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  // FormBuilder with Validators
  fBuilder = new FormBuilder().group({
    first_name: ['', emptyValidator()],
    last_name: ['', emptyValidator()],
    middle_name: '',
    preferred_name: '',
    ssn: ['', emptyValidator()],
    dob: ['', emptyValidator()],
    street: ['', emptyValidator()],
    apt: '',
    city: ['', emptyValidator()],
    state: ['', emptyValidator()],
    zipcode: ['', emptyValidator()],
    cellphone: ['', emptyValidator()],
    workphone: '',
    // visa_title: '',
    // start_date: '',
    // end_date: '',
    emerg_first_name: ['', emptyValidator()],
    emerg_middle_name: '',
    emerg_last_name: ['', emptyValidator()],
    emerg_phone: ['', emptyValidator()],
    emerg_email: ['', [emptyValidator(), Validators.email]],
    emerg_relationship: ['', emptyValidator()],
  })

  onClick() {

    // const { username, email, password } = this.fBuilder.controls;

    // if (username.errors?.empty) {
    //   alert('Username cannot be empty!')
    // }

    // if (!this.fBuilder.valid) alert('Fields cannot be empty!');

    console.log(this.fBuilder.getRawValue());
  }

}
