import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { ApplicationFormComponent } from '../application-form/application-form.component';
import { UserHomePageComponent } from '../user-home-page/user-home-page.component';
import { UserDocListComponent } from '../user-doc-list/user-doc-list.component';
import { UserHousingComponent } from '../user-housing/user-housing.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { AuthLoginComponent } from '../auth-login/auth-login.component';
import { AuthRegistrationComponent } from '../auth-registration/auth-registration.component';
import { AuthRegistrationTokenComponent } from '../auth-registrationToken/auth-registrationToken.component';
import { HomeComponent } from '../hr/home/home.component';
import { EmployeesPanelComponent } from '../hr/employees-panel/employees-panel.component';
import { HiringPanelComponent } from '../hr/hiring-panel/hiring-panel.component';
import { EmployeesProfileComponent } from '../hr/employees-profile/employees-profile.component';

const routes: Routes = [
  { path: '', component: AuthLoginComponent },
  { path: 'application', component: ApplicationFormComponent },
  { path: 'user-home', component: UserHomePageComponent },
  { path: 'user-doc-list', component: UserDocListComponent },
  { path: 'user-housing', component: UserHousingComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'auth-login', component : AuthLoginComponent },
  { path: 'auth-registration/:registrationToken', component : AuthRegistrationComponent},
  { path: 'auth-registrationToken', component: AuthRegistrationTokenComponent },
  { path: 'admin-home', component: HomeComponent },
  { path: 'employees', component: EmployeesPanelComponent },
  { path: 'hiring', component: HiringPanelComponent },
  { path: 'profile/:id', component: EmployeesProfileComponent },
];

@NgModule({
  // creates an NgModule containing all directives and given routes
  imports: [RouterModule.forRoot(routes)],
  // export the module for routing usage
  exports: [RouterModule],
})
export class AppRoutingModule { }
