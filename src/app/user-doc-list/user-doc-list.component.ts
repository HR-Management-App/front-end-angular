import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { saveAs } from 'file-saver';
import { NewFilePathRequest } from 'app/domain/EmployeeService/request/newFilePathRequest';
import { ApplicationService } from 'app/services/application.service';

@Component({
  selector: 'app-user-doc-list',
  templateUrl: './user-doc-list.component.html',
  styleUrls: ['./user-doc-list.component.css']
})
export class UserDocListComponent implements OnInit {

  constructor(private service: EmployeeService, private applicationService: ApplicationService) { }

  visaPath: string = '';
  visaFile: string = '';
  driverPath: string = '';
  driverFile: string = '';
  contractPath: string = '';
  contractFile: string = '';
  taxPath: string = '';
  taxFile: string = '';

  canUpload: boolean = false;

  ngOnInit(): void {
    this.service.getDocumentPath(sessionStorage.getItem('emp_id'), 'visa').subscribe({
      next: (data) => {
        let json = JSON.stringify(data);
        let obj = JSON.parse(json);
        this.visaPath = obj.path;
        this.visaFile = obj.path.split('/')[2];
      }
    });

    this.service.getDocumentPath(sessionStorage.getItem('emp_id'), 'driver_license').subscribe({
      next: (data) => {
        let json = JSON.stringify(data);
        let obj = JSON.parse(json);
        this.driverPath = obj.path;
        this.driverFile = obj.path.split('/')[2];
      }
    });

    this.service.getDocumentPath(sessionStorage.getItem('emp_id'), 'contract').subscribe({
      next: (data) => {
        let json = JSON.stringify(data);
        let obj = JSON.parse(json);
        this.contractPath = obj.path;
        this.contractFile = obj.path.split('/')[2];
      }
    });

    this.service.getDocumentPath(sessionStorage.getItem('emp_id'), 'tax').subscribe({
      next: (data) => {
        let json = JSON.stringify(data);
        let obj = JSON.parse(json);
        this.taxPath = obj.path;
        this.taxFile = obj.path.split('/')[2];
      }
    });

    this.applicationService.run()
      .subscribe({
        next: (data) => {
          console.log(JSON.stringify(data));
          let json = JSON.stringify(data);
          if (JSON.parse(json).status == 'approved' || JSON.parse(json).status == 'rejected') {
            this.canUpload = true;
          }
        },
        error: (e) => {
          console.log(e);
        }
      });
  }

  downloadVisa() {
    this.service.download(this.visaPath).subscribe(
      (data: any) => {
        // let blob: any = new Blob([data], { type: 'text/json; charset=utf-8' });
        // const url = window.URL.createObjectURL(data);
        //window.open(url);
        saveAs(data, this.visaFile);
      }
    );
  }

  downloadDriver() {
    this.service.download(this.driverPath).subscribe(
      (data: any) => {
        saveAs(data, this.driverFile);
      }
    );
  }

  downloadContract() {
    this.service.download(this.contractPath).subscribe(
      (data: any) => {
        // let blob: any = new Blob([data], { type: 'text/json; charset=utf-8' });
        // const url = window.URL.createObjectURL(data);
        //window.open(url);
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

  visaNewFile!: File;
  driverNewFile!: File;
  taxNewFile!: File;
  contractNewFile!: File;
  selectVisaFile(event: any) {
    this.visaNewFile = event.target.files.item(0);
  }
  selectDriverFile(event: any) {
    this.driverNewFile = event.target.files.item(0);
  }
  selectTaxFile(event: any) {
    this.taxNewFile = event.target.files.item(0);
  }
  selectContractFile(event: any) {
    this.contractNewFile = event.target.files.item(0);
  }

  uploadVisa() {
    if (this.visaNewFile == null) {
      alert('Please choose a file!');
    } else {
      this.service.upload(this.visaNewFile, 'visa/' + sessionStorage.getItem('user_id')).subscribe({
        next: (data) => {
          console.log("uploaded" + JSON.stringify(data));
          let json = JSON.stringify(data);
          let obj = JSON.parse(json);
          let newPath = obj.filename;
          let fileRequest = new NewFilePathRequest(Number(sessionStorage.getItem('emp_id')), 'visa', newPath);
          this.service.updatePath(fileRequest).subscribe({
            complete: () => {
              alert('successfully uploaded');
            }
          });
        },
      });
    }
  }
  uploadDriver() {
    if (this.driverNewFile == null) {
      alert('Please choose a file!');
    } else {
      this.service.upload(this.driverNewFile, 'driver_license/' + sessionStorage.getItem('user_id')).subscribe({
        next: (data) => {
          console.log("uploaded" + JSON.stringify(data));
          let json = JSON.stringify(data);
          let obj = JSON.parse(json);
          let newPath = obj.filename;
          let fileRequest = new NewFilePathRequest(Number(sessionStorage.getItem('emp_id')), 'driver_license', newPath);
          this.service.updatePath(fileRequest).subscribe({
            complete: () => {
              alert('successfully uploaded');
            }
          });
        },
      });
    }
  }
  uploadTax() {
    if (this.taxNewFile == null) {
      alert('Please choose a file!');
    } else {
      this.service.upload(this.taxNewFile, 'tax/' + sessionStorage.getItem('user_id')).subscribe({
        next: (data) => {
          console.log("uploaded" + JSON.stringify(data));
          let json = JSON.stringify(data);
          let obj = JSON.parse(json);
          let newPath = obj.filename;
          let fileRequest = new NewFilePathRequest(Number(sessionStorage.getItem('emp_id')), 'tax', newPath);
          this.service.updatePath(fileRequest).subscribe({
            complete: () => {
              alert('successfully uploaded');
            }
          });
        },
      });
    }
  }
  uploadContract() {
    if (this.contractNewFile == null) {
      alert('Please choose a file!');
    } else {
      this.service.upload(this.contractNewFile, 'contract/' + sessionStorage.getItem('user_id')).subscribe({
        next: (data) => {
          console.log("uploaded" + JSON.stringify(data));
          let json = JSON.stringify(data);
          let obj = JSON.parse(json);
          let newPath = obj.filename;
          let fileRequest = new NewFilePathRequest(Number(sessionStorage.getItem('emp_id')), 'contract', newPath);
          this.service.updatePath(fileRequest).subscribe({
            complete: () => {
              alert('successfully uploaded');
            }
          });
        },
      });
    }
  }
}
