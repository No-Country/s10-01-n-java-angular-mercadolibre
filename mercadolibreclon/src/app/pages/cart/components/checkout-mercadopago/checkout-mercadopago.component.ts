import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft  } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-checkout-mercadopago',
  templateUrl: './checkout-mercadopago.component.html',
  styleUrls: ['./checkout-mercadopago.component.scss']
})
export class CheckoutMercadopagoComponent {

  faArrowLeft = faArrowLeft;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  clearCart() {
    this.productService.clearCart();
  }

  progressBarVisible = false;

  onClick() {
    this.progressBarVisible = true;

    setTimeout(() => {
      this.progressBarVisible = false;
      this.router.navigate(['/cart/payment-status']);
      this.clearCart();
    }, 7000);

  }

}
