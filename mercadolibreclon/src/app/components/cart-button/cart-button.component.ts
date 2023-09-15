import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.scss']
})
export class CartButtonComponent {

  @Input() product: any;
  @Output() addToCartClick = new EventEmitter<any>();

  constructor(
    private router: Router
  ) {}

  addToCart() {
    this.addToCartClick.emit(this.product);
    this.router.navigate(['/cart/orders']);
  }

}
