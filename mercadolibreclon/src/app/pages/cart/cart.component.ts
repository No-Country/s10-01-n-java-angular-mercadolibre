import { Component } from '@angular/core';
import { faArrowLeft  } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  faArrowLeft = faArrowLeft;

  cart: any[] = [];

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.cart = this.productService.getCart();

  }

}
