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
// import { AppRoutingModule } from './app-routing.module';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { UserDocListComponent } from './user-doc-list/user-doc-list.component';
import { UserHousingComponent } from './user-housing/user-housing.component';
import { UserNavBarComponent } from './user-nav-bar/user-nav-bar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule } from '@angular/router';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegistrationComponent } from './auth-registration/auth-registration.component';
import { AuthRegistrationTokenComponent } from './auth-registrationToken/auth-registrationToken.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SignOutComponent } from './sign-out/sign-out.component';
import { UserVisaManagementComponent } from './user-visa-management/user-visa-management.component';
import { AdminHousingComponent } from './hr/admin-housing/admin-housing.component';



@NgModule({
  declarations: [
    AppComponent,
    ApplicationFormComponent,
    NavBarComponent,
    EmployeesPanelComponent,
    EmployeesProfileComponent,
    HiringApplicationPendingComponent,
    HiringPanelComponent,
    HomeComponent, // HR
    StatusTrackComponent,
    UserHomePageComponent,
    UserDocListComponent,
    UserHousingComponent,
    UserNavBarComponent,
    UserProfileComponent,
    AuthLoginComponent,
    AuthRegistrationComponent,
    AuthRegistrationTokenComponent,
    SignOutComponent,
    UserVisaManagementComponent,
    AdminHousingComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
