import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { ApplicationFormComponent } from '../application-form/application-form.component';
import { UserHomePageComponent } from '../user-home-page/user-home-page.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'application', component: ApplicationFormComponent },
  { path: 'user-home', component: UserHomePageComponent }
  // {
  //   path: 'login',
  //   component: ProtectedCompComponent,
  //   canActivate: [AuthGuardService],
  // },
  // "Catch all" route must be last!
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  // creates an NgModule containing all directives and given routes
  imports: [RouterModule.forRoot(routes)],
  // export the module for routing usage
  exports: [RouterModule],
})
export class AppRoutingModule { }
