import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emptyValidator } from '../services/empty.validator';
import { FileDetails } from '../domain/file-details.model';
import { FileUploadService } from '../services/file.upload.service';
import { UploadResponse } from '../response/upload-response.model';
import { Employee } from '../domain/EmployeeService/employee';
import { Contact } from '../domain/EmployeeService/contact';
import { Visa } from '../domain/EmployeeService/visa';
import { Address } from '../domain/EmployeeService/address';
import { PersonalDocument } from '../domain/EmployeeService/personal.document';
import { EmployeeInfoUploadService } from '../services/employee.info.upload.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  constructor(private fileUploadService: FileUploadService,
    private infoUploadService: EmployeeInfoUploadService) { }

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

  visaFile!: File;
  driverFile!: File;

  selectVisaFile(event: any) {
    this.visaFile = event.target.files.item(0);
  }

  selectDriverFile(event: any) {
    this.driverFile = event.target.files.item(0);
  }

  onClick() {
    // const { username, email, password } = this.fBuilder.controls;

    // if (username.errors?.empty) {
    //   alert('Username cannot be empty!')
    // }

    // if (!this.fBuilder.valid) alert('Fields cannot be empty!');
    let visaPath;
    this.fileUploadService.upload(this.visaFile, 'visa').subscribe({
      next: (data) => {
        console.log("uploaded" + JSON.stringify(data));
        let json = JSON.stringify(data);
        let obj = JSON.parse(json);
        visaPath = obj.filename;
      },
      error: (e) => {
        console.log(e);
      }
    });
    let driverPath;
    this.fileUploadService.upload(this.driverFile, 'driver_license').subscribe({
      next: (data) => {
        console.log("uploaded" + JSON.stringify(data));
        let json = JSON.stringify(data);
        let obj = JSON.parse(json);
        driverPath = obj.filename;
      },
      error: (e) => {
        console.log(e);
      }
    });

    let contact = new Contact(
      this.fBuilder.controls['emerg_first_name'].value,
      this.fBuilder.controls['emerg_last_name'].value,
      this.fBuilder.controls['emerg_phone'].value,
      this.fBuilder.controls['emerg_email'].value,
      this.fBuilder.controls['emerg_relationship'].value,
    );
    let contactList: Contact[] = [];
    contactList.push(contact);

    let visa = new Visa(
      this.fBuilder.controls['visa_title'].value,
      new Date(this.fBuilder.controls['start_date'].value),
      new Date(this.fBuilder.controls['end_date'].value),
    );
    let visaList: Visa[] = [];
    visaList.push(visa);

    let address = new Address(
      this.fBuilder.controls['street'].value,
      this.fBuilder.controls['apt'].value,
      this.fBuilder.controls['city'].value,
      this.fBuilder.controls['state'].value,
      this.fBuilder.controls['zipcode'].value,
    );
    let addressList: Address[] = [];
    addressList.push(address);

    let visaDoc = new PersonalDocument(
      visaPath,
      "visa",
    );
    let driverDoc = new PersonalDocument(
      driverPath,
      "driver_license",
    );
    let docList: PersonalDocument[] = [];
    docList.push(visaDoc);
    docList.push(driverDoc);

    let employee = new Employee(
      1, // userID
      this.fBuilder.controls['first_name'].value,
      this.fBuilder.controls['last_name'].value,
      this.fBuilder.controls['middle_name'].value,
      this.fBuilder.controls['preferred_name'].value,
      "1@test.com", // email
      this.fBuilder.controls['cellphone'].value,
      this.fBuilder.controls['workphone'].value,
      this.fBuilder.controls['gender'].value,
      this.fBuilder.controls['ssn'].value,
      new Date(this.fBuilder.controls['dob'].value),
      new Date(this.fBuilder.controls['start_date'].value),
      new Date(this.fBuilder.controls['end_date'].value),
      this.fBuilder.controls['driver_lic_num'].value,
      new Date(this.fBuilder.controls['driver_exp_date'].value),
      contactList,
      addressList,
      visaList,
      docList
    );

    this.infoUploadService.uploadEmployeeToDb(employee).subscribe({
      next: (data) => {
        console.log("uploaded" + JSON.stringify(data));
        let json = JSON.stringify(data);
        let obj = JSON.parse(json);
        alert("Updated application form for employee#" + obj.emp_id);
      },
      error: (e) => {
        console.log(e);
      }
    });

  }
}
