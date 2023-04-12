import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-user-doc-list',
  templateUrl: './user-doc-list.component.html',
  styleUrls: ['./user-doc-list.component.css']
})
export class UserDocListComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  visaPath: string = '';
  visaFile: string = '';
  driverPath: string = '';
  driverFile: string = '';

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

}
