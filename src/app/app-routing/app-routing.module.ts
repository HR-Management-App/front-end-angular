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


const routes: Routes = [
  { path: 'auth-login', component: AuthLoginComponent },
  { path: '', component: UserHomePageComponent },
  { path: 'application', component: ApplicationFormComponent },
  { path: 'user-home', component: UserHomePageComponent },
  { path: 'user-doc-list', component: UserDocListComponent },
  { path: 'user-housing', component: UserHousingComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'auth-registration', component: AuthRegistrationComponent },
  { path: 'auth-registrationToken', component: AuthRegistrationTokenComponent },
  // {
  //   path: 'login',
  //   component: ProtectedCompComponent,
  //   canActivate: [AuthGuardService],
  // },
  // "Catch all" route must be last!
  { path: '**', component: UserHomePageComponent },
];

@NgModule({
  // creates an NgModule containing all directives and given routes
  imports: [RouterModule.forRoot(routes)],
  // export the module for routing usage
  exports: [RouterModule],
})
export class AppRoutingModule { }
