import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardComponent } from './components/card/card.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ArticleComponent } from './components/article/article.component';
import { CartButtonComponent } from './components/cart-button/cart-button.component';
import { DeliveryMethodComponent } from './pages/cart/components/delivery-method/delivery-method.component';
import { PaymentMethodComponent } from './pages/cart/components/payment-method/payment-method.component';
import { CheckoutStandardComponent } from './pages/cart/components/checkout-standard/checkout-standard.component';
import { CheckoutMercadopagoComponent } from './pages/cart/components/checkout-mercadopago/checkout-mercadopago.component';
import { OrdersComponent } from './pages/cart/components/orders/orders.component';
import { EmptyCartComponent } from './pages/cart/components/empty-cart/empty-cart.component';
import { PaymentStatusComponent } from './pages/cart/components/payment-status/payment-status.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    DashboardComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    CardComponent,
    ProductDetailComponent,
    CartComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    PaymentComponent,
    ArticleComponent,
    CartButtonComponent,
    DeliveryMethodComponent,
    PaymentMethodComponent,
    CheckoutStandardComponent,
    CheckoutMercadopagoComponent,
    OrdersComponent,
    EmptyCartComponent,
    PaymentStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
