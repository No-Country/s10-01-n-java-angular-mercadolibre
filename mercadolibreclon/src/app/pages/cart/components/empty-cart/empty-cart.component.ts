import { Component } from '@angular/core';
import { faBasketShopping  } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-empty-cart',
  templateUrl: './empty-cart.component.html',
  styleUrls: ['./empty-cart.component.scss']
})
export class EmptyCartComponent {

  faBasketShopping = faBasketShopping;

}
