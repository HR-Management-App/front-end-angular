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
    // throw new Error('Method not implemented.');
  }

  citizen_options = [
    { name: 'Yes' },
    { name: 'No' },
  ];
  yes_no = 0;
  onOptionChange(n) {
    this.yes_no = n;
    if (this.yes_no == 0) {
      this.fBuilder.controls['visa_title'].setValue('Green Card'); // by default
    } else {
      this.fBuilder.controls['visa_title'].setValue('H1-B'); // by default
    }
  }

  visas = [
    { name: 'H1-B' },
    { name: 'L2' },
    { name: 'F1(CPT/OPT)' },
    { name: 'H4' },
    { name: 'Other' },
  ];
  isVisible = 0;
  onItemChange(i) {
    this.isVisible = i;

  }

  driver_option = "Yes"

  // FormBuilder with Validators
  fBuilder = new FormBuilder().group({
    first_name: ['', emptyValidator()],
    last_name: ['', emptyValidator()],
    middle_name: '',
    preferred_name: '',
    gender: '',
    ssn: ['', emptyValidator()],
    dob: ['', emptyValidator()],
    street: ['', emptyValidator()],
    apt: '',
    city: ['', emptyValidator()],
    state: ['', emptyValidator()],
    zipcode: ['', emptyValidator()],
    cellphone: ['', emptyValidator()],
    workphone: '',
    is_citizen: 'Yes', // by default
    visa_title: 'Green Card', // by default
    start_date: '',
    end_date: '',
    driver_lic_num: ['', emptyValidator()],
    driver_exp_date: ['', emptyValidator()],
    driver_upload: ['', emptyValidator()],
    emerg_first_name: ['', emptyValidator()],
    emerg_middle_name: '',
    emerg_last_name: ['', emptyValidator()],
    emerg_phone: ['', emptyValidator()],
    emerg_email: ['', [emptyValidator(), Validators.email]],
    emerg_relationship: ['', emptyValidator()],
    ref_first_name: ['', emptyValidator()],
    ref_middle_name: '',
    ref_last_name: ['', emptyValidator()],
    ref_phone: ['', emptyValidator()],
    ref_email: ['', [emptyValidator(), Validators.email]],
    ref_relationship: ['', emptyValidator()],
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
