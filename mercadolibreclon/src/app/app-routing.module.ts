import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import {AuthLoginComponent} from "./components/auth-login/auth-login.component";
import { AuthLoginBisComponent } from './components/auth-login-bis/auth-login-bis.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LogintwoComponent } from './components/logintwo/logintwo.component';
import { FooterComponent } from './components/shared/footer/footer.component';


const routes: Routes = [
  {path:'',redirectTo:'/inicio', pathMatch:'full'},
  {path: "auth-login", component: AuthLoginComponent},
  {path: "auth-login-bis", component: AuthLoginBisComponent},
  {path: "inicio", component: DashboardComponent},
  {path: "iniciar-sesion", component: LogintwoComponent},
  {path: "footer", component: FooterComponent}
=======
import { HomeComponent } from './pages/home/home.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ArticleComponent } from './components/article/article.component';
//import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  //{ path: '**', redirectTo: 'home', pathMatch: 'full' },
  //{path: 'home', component: DashboardComponent},
  { path: 'auth-login', redirectTo: 'auth-login', pathMatch: 'full'},
  { path: 'auth-login', component: AuthLoginComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'article', component: ArticleComponent}
>>>>>>> fb8b9857b32235d4e97072cd763b50691cc2551e
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
