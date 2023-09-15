import { Component } from '@angular/core';
import { faArrowLeft  } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-checkout-standard',
  templateUrl: './checkout-standard.component.html',
  styleUrls: ['./checkout-standard.component.scss']
})
export class CheckoutStandardComponent {

  constructor(
    private productService: ProductService
  ) {}

  faArrowLeft = faArrowLeft;

  clearCart() {
    this.productService.clearCart();
  }
}
