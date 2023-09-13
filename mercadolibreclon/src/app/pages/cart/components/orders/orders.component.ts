import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  faArrowLeft = faArrowLeft;

  cart: any[] = [];

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cart = this.productService.getCart();
  }

  removeProductFromCart(productId: string) {
    this.productService.removeFromCart(productId);
    if(this.productService.getLength() == 0) {
      this.router.navigate(['/cart/empty-cart']);
    }
  }

}
