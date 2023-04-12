import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { FormBuilder } from '@angular/forms';
import { Employee } from '../domain/EmployeeService/employee';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  ngOnInit(): void {
    this.service.getProfile(1).subscribe({
      next: (data) => {
        let json = JSON.stringify(data);
        let obj = JSON.parse(json);
        console.log(obj);
        this.fBuilder.controls['first_name'].setValue(obj.firstName);
        this.fBuilder.controls['last_name'].setValue(obj.lastName);
        this.fBuilder.controls['middle_name'].setValue(obj.middleName);
        this.fBuilder.controls['preferred_name'].setValue(obj.preferredName);
        this.fBuilder.controls['gender'].setValue(obj.gender);
        this.fBuilder.controls['dob'].setValue(obj.dob);
        this.fBuilder.controls['street'].setValue(obj.currentAddress.addressLine1);
        this.fBuilder.controls['apt'].setValue(obj.currentAddress.addressLine2);
        this.fBuilder.controls['city'].setValue(obj.currentAddress.city);
        this.fBuilder.controls['state'].setValue(obj.currentAddress.state);
        this.fBuilder.controls['zipcode'].setValue(obj.currentAddress.zipcode);
        this.fBuilder.controls['cellphone'].setValue(obj.cellPhoneNumber);
        this.fBuilder.controls['workphone'].setValue(obj.workPhoneNumber);
        this.fBuilder.controls['visa_title'].setValue(obj.visaStatus);
        this.fBuilder.controls['driver_lic_num'].setValue(obj.driverLicense);
      }
    });
  }

  fBuilder = new FormBuilder().group({
    first_name: [{ value: null, disabled: true }],
    last_name: [{ value: null, disabled: true }],
    middle_name: [{ value: null, disabled: true }],
    preferred_name: [{ value: null, disabled: true }],
    gender: [{ value: null, disabled: true }],
    dob: [{ value: null, disabled: true }],
    street: [{ value: null, disabled: true }],
    apt: [{ value: null, disabled: true }],
    city: [{ value: null, disabled: true }],
    state: [{ value: null, disabled: true }],
    zipcode: [{ value: null, disabled: true }],
    cellphone: [{ value: null, disabled: true }],
    workphone: [{ value: null, disabled: true }],
    visa_title: [{ value: null, disabled: true }],
    driver_lic_num: [{ value: null, disabled: true }],
  })


}
