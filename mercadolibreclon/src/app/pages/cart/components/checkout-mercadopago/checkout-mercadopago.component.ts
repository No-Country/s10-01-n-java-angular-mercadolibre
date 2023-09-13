import { Component } from '@angular/core';
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
    private productService: ProductService
  ) {}

  clearCart() {
    this.productService.clearCart();
  }

}
