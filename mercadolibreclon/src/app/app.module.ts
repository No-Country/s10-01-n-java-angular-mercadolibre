import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthLoginBisComponent } from './components/auth-login-bis/auth-login-bis.component';
import { LogintwoComponent } from './components/logintwo/logintwo.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { NavComponent } from './components/shared/nav/nav.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/shared/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ArticleComponent } from './components/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
<<<<<<< HEAD
    AuthLoginBisComponent,
    LogintwoComponent,
    DashboardComponent,
    NavComponent,
    FooterComponent,
=======
    HomeComponent,
    SliderComponent,
    CardComponent,
    FooterComponent,
    NavbarComponent,
    DashboardComponent,
    PaymentComponent,
    ArticleComponent
>>>>>>> fb8b9857b32235d4e97072cd763b50691cc2551e
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
