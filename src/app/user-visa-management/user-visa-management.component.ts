import { Component, OnInit } from '@angular/core';
import { NewFilePathRequest } from 'app/domain/EmployeeService/request/newFilePathRequest';
import { ApplicationService } from 'app/services/application.service';
import { EmployeeService } from 'app/services/employee.service';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-user-visa-management',
  templateUrl: './user-visa-management.component.html',
  styleUrls: ['./user-visa-management.component.css']
})
export class UserVisaManagementComponent implements OnInit {

  canShow: Boolean = false;

  ngOnInit(): void {
    this.service.getActiveFlag("F1(CPT/OPT)").subscribe({
      next: (data) => {
        this.canShow = data;
        if (this.canShow) {
          this.service.getDocumentPath(sessionStorage.getItem('emp_id'), 'EAD').subscribe({
            next: (data) => {
              let json = JSON.stringify(data);
              let obj = JSON.parse(json);
              this.visaPath = obj.path;
              this.visaFile = obj.path.split('/')[2];
            }
          });
        }
      }
    });
  }

  constructor(private service: EmployeeService) { }

  visaPath: string = '';
  visaFile: string = '';

  downloadVisa() {

    if (this.visaPath == '') {
      alert('no file to download');
    } else {
      this.service.download(this.visaPath).subscribe(
        (data: any) => {
          saveAs(data, this.visaFile);
        }
      );
    }
  }

  visaNewFile!: File;
  selectVisaFile(event: any) {
    this.visaNewFile = event.target.files.item(0);
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
          let fileRequest = new NewFilePathRequest(Number(sessionStorage.getItem('emp_id')), 'EAD', newPath);
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
