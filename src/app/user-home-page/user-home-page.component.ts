import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../services/application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent implements OnInit {

  constructor(private applicationService: ApplicationService,
    private _router: Router) { }

  ngOnInit(): void {
    this.applicationService.run()
      .subscribe({
        next: (data) => {
          console.log(JSON.stringify(data));
          let json = JSON.stringify(data);
          this.application = JSON.parse(json).status;
        },
        complete: () => {
          if (this.application == 'never submitted') {
            console.log('hehehe');
            this._router.navigate(['/application']);
          }
        },
        error: (e) => {
          console.log(e);
        }
      });


  }

  application = '';
}



