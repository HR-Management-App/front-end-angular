import { Component, OnInit } from '@angular/core';
import { Application } from './domain/Application';
import { ApplicationService } from './services/application.service';
import { catchError, from, of, throwError, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  application: Application = new Application();

  constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
    // let response = this.applicationService.getData();
    // console.log(response);

    // response
    //   // .pipe(catchError((err) => of([{ err }])))
    //   .subscribe((app: Application) => this.application = app);
    // console.log(this.application);
    // // this.applicationService.onSubscribe().pipe(catchError((error) => of([err]))).subscribe(new)
  }

}
