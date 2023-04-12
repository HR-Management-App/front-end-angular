import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emptyValidator } from '../services/empty.validator';
import { Employee } from '../domain/EmployeeService/employee';
import { Contact } from '../domain/EmployeeService/contact';
import { Visa } from '../domain/EmployeeService/visa';
import { Address } from '../domain/EmployeeService/address';
import { PersonalDocument } from '../domain/EmployeeService/personal.document';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { ApplicationService } from '../services/application.service';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  isLoaded: boolean = false;


  constructor(private service: EmployeeService,
    private _router: Router,
    private appService: ApplicationService) { }

  contractPath: string = '';
  contractFile: string = '';
  taxPath: string = '';
  taxFile: string = '';

  ngOnInit(): void {
    this.appService.getDigitalPath('contract').subscribe({
      next: (data) => {
        let json = JSON.stringify(data);
        let obj = JSON.parse(json);
        this.contractPath = obj.path;
        this.contractFile = obj.path.split('/')[1];
      }
    });

    this.appService.getDigitalPath('tax').subscribe({
      next: (data) => {
        let json = JSON.stringify(data);
        let obj = JSON.parse(json);
        this.taxPath = obj.path;
        this.taxFile = obj.path.split('/')[1];
      },
    });
    this.isLoaded = true;

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
  taxSignedFile!: File;
  contractSignedFile!: File;

  selectVisaFile(event: any) {
    this.visaFile = event.target.files.item(0);
  }
  selectDriverFile(event: any) {
    this.driverFile = event.target.files.item(0);
  }
  selectTaxFile(event: any) {
    this.taxSignedFile = event.target.files.item(0);
  }
  selectContractFile(event: any) {
    this.contractSignedFile = event.target.files.item(0);
  }

  downloadContract() {
    this.service.download(this.contractPath).subscribe(
      (data: any) => {
        saveAs(data, this.contractFile);
      }
    );

  }
  downloadTax() {
    this.service.download(this.taxPath).subscribe(
      (data: any) => {
        saveAs(data, this.taxFile);
      }
    );
  }

  onClick() {
    // const { username, email, password } = this.fBuilder.controls;

    // if (username.errors?.empty) {
    //   alert('Username cannot be empty!')
    // }

    // if (!this.fBuilder.valid) alert('Fields cannot be empty!');
    // let visaPath = '';
    // let driverPath = '';
    let visaDoc = new PersonalDocument(
      '',
      "visa",
    );
    let driverDoc = new PersonalDocument(
      '',
      "driver_license",
    );
    let contractDoc = new PersonalDocument(
      '',
      "contract",
    );
    let taxDoc = new PersonalDocument(
      '',
      "tax",
    );

    let docList: PersonalDocument[] = [];

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

    let user_id = Number(sessionStorage.getItem('user_id'));
    let user_email = sessionStorage.getItem('user_email');
    let employee = new Employee(
      user_id,
      this.fBuilder.controls['first_name'].value,
      this.fBuilder.controls['last_name'].value,
      this.fBuilder.controls['middle_name'].value,
      this.fBuilder.controls['preferred_name'].value,
      user_email,
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

    this.service.upload(this.visaFile, 'visa/' + user_id).subscribe({
      next: (visa_data) => {
        console.log("uploaded" + JSON.stringify(visa_data));
        let json = JSON.stringify(visa_data);
        let obj = JSON.parse(json);
        visaDoc.path = obj.filename;
        docList.push(visaDoc);
        this.service.upload(this.driverFile, 'driver_license/' + user_id).subscribe({
          next: (driver_data) => {
            console.log("uploaded" + JSON.stringify(driver_data));
            let json = JSON.stringify(driver_data);
            let obj = JSON.parse(json);
            // driverPath = obj.filename;
            driverDoc.path = obj.filename;
            docList.push(driverDoc);
            this.service.upload(this.contractSignedFile, 'contract/' + user_id).subscribe({
              next: (data) => {
                console.log("uploaded" + JSON.stringify(data));
                let json = JSON.stringify(data);
                let obj = JSON.parse(json);
                contractDoc.path = obj.filename;
                docList.push(contractDoc);
                this.service.upload(this.taxSignedFile, 'tax/' + user_id).subscribe({
                  next: (data) => {
                    console.log("uploaded" + JSON.stringify(data));
                    let json = JSON.stringify(data);
                    let obj = JSON.parse(json);
                    taxDoc.path = obj.filename;
                    docList.push(taxDoc);
                    this.service.uploadEmployeeToDb(employee).subscribe({
                      next: (data) => {
                        console.log("uploaded" + JSON.stringify(data));
                        let json = JSON.stringify(data);
                        let obj = JSON.parse(json);
                        sessionStorage.setItem('emp_id', obj.emp_id);
                        alert("Updated application form for employee#" + obj.emp_id + " application#" + obj.app_id);
                      },
                      complete: () => {
                        this._router.navigate(['/user-home']);
                      },
                      error: (e) => {
                        console.log(e);
                      }
                    });
                  },
                  error: (e) => {
                    console.log(e);
                  }
                });
              },
              error: (e) => {
                console.log(e);
              }
            });
          },
          error: (e) => {
            console.log(e);
          }
        });
      },
      error: (e) => {
        console.log(e);
      }
    });

  }
}
