import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../services/application.service';

@Component({
  selector: 'app-user-nav-bar',
  templateUrl: './user-nav-bar.component.html',
  styleUrls: ['./user-nav-bar.component.css']
})
export class UserNavBarComponent implements OnInit {

  constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
    // this.applicationService.run()
    //   .subscribe({
    //     next: (data) => {
    //       console.log(JSON.stringify(data));
    //       let json = JSON.stringify(data);
    //       this.application = JSON.parse(json).status;
    //     },
    //     error: (e) => {
    //       console.log(e);
    //     }
    //   });
    // sessionStorage.setItem('app_status', 'approved');
    //  if ( sessionStorage.getItem('app_status') == 'pending') {
    this.application = sessionStorage.getItem('app_status');
    //  }
  }

  application: string = 'never submitted';

}
