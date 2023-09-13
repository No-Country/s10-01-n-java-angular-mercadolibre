import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ArticleComponent } from './components/article/article.component';
import { DeliveryMethodComponent } from './pages/cart/components/delivery-method/delivery-method.component';
import { PaymentMethodComponent } from './pages/cart/components/payment-method/payment-method.component';
import { CheckoutStandardComponent } from './pages/cart/components/checkout-standard/checkout-standard.component';
import { CheckoutMercadopagoComponent } from './pages/cart/components/checkout-mercadopago/checkout-mercadopago.component';
import { OrdersComponent } from './pages/cart/components/orders/orders.component';
import { EmptyCartComponent } from './pages/cart/components/empty-cart/empty-cart.component';
import { EmptyCartGuard } from './guards/empty-cart.guard';
import { PaymentStatusComponent } from './pages/cart/components/payment-status/payment-status.component';

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
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  {
    path: 'cart',
    component: CartComponent,
    children: [
      {
        path: 'empty-cart',
        component: EmptyCartComponent
      },
      {
        path: 'orders',
        component: OrdersComponent,
        canActivate: [EmptyCartGuard]
      },
      {
        path: 'delivery-method',
        component: DeliveryMethodComponent,
        canActivate: [EmptyCartGuard]
      },
      {
        path: 'payment-method',
        component: PaymentMethodComponent,
        canActivate: [EmptyCartGuard]
      },
      {
        path: 'checkout-standard',
        component: CheckoutStandardComponent,
        canActivate: [EmptyCartGuard]
      },
      {
        path: 'checkout-mercadopago',
        component: CheckoutMercadopagoComponent,
        canActivate: [EmptyCartGuard]
      },
      {
        path: 'payment-status',
        component: PaymentStatusComponent
      }
    ]
  },
  { path: 'auth-login', component: AuthLoginComponent },
  { path: 'payment', component: PaymentComponent},
  { path: 'article', component: ArticleComponent},
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
