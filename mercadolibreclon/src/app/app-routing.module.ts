import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
