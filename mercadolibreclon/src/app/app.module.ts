import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthLoginBisComponent } from './components/auth-login-bis/auth-login-bis.component';
import { LogintwoComponent } from './components/logintwo/logintwo.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { NavComponent } from './components/shared/nav/nav.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    AuthLoginBisComponent,
    LogintwoComponent,
    DashboardComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
