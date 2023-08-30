import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthLoginComponent} from "./components/auth-login/auth-login.component";
import { AuthLoginBisComponent } from './components/auth-login-bis/auth-login-bis.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LogintwoComponent } from './components/logintwo/logintwo.component';


const routes: Routes = [
  {path:'',redirectTo:'/inicio', pathMatch:'full'},
  {path: "auth-login", component: AuthLoginComponent},
  {path: "auth-login-bis", component: AuthLoginBisComponent},
  {path: "inicio", component: DashboardComponent},
  {path: "iniciar-sesion", component: LogintwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
