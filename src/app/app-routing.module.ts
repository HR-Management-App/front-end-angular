import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./hr/home/home.component";
import { EmployeesPanelComponent } from './hr/employees-panel/employees-panel.component';
import { HiringPanelComponent } from './hr/hiring-panel/hiring-panel.component';
import { EmployeesProfileComponent } from './hr/employees-profile/employees-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employees', component: EmployeesPanelComponent },
  { path: 'hiring', component: HiringPanelComponent },
  { path: 'profile/:id', component: EmployeesProfileComponent}
  //{ path: 'housing', component: HousingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
