import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { NavBarComponent } from './hr/nav-bar/nav-bar.component';
import { EmployeesPanelComponent } from './hr/employees-panel/employees-panel.component';
import { EmployeesProfileComponent } from './hr/employees-profile/employees-profile.component';
import { HiringApplicationPendingComponent } from './hr/hiring-application-pending/hiring-application-pending.component';
import { HiringPanelComponent } from './hr/hiring-panel/hiring-panel.component';
import { HomeComponent } from './hr/home/home.component';
import { StatusTrackComponent } from './hr/status-track/status-track.component';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    ApplicationFormComponent,
    NavBarComponent,
    EmployeesPanelComponent,
    EmployeesProfileComponent,
    HiringApplicationPendingComponent,
    HiringPanelComponent,
    HomeComponent,
    StatusTrackComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
