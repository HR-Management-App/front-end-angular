import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicationFormComponent } from './application-form/application-form.component';
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


@NgModule({
  declarations: [
    AppComponent,
    ApplicationFormComponent,
    UserHomePageComponent,
    UserDocListComponent,
    UserHousingComponent,
    UserNavBarComponent,
    UserProfileComponent,
    AuthLoginComponent,
    AuthRegistrationComponent,
    AuthRegistrationTokenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
