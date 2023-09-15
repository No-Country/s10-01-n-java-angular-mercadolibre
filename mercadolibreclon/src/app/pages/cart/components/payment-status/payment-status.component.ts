import { Component } from '@angular/core';
import { faBasketShopping  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-payment-status',
  templateUrl: './payment-status.component.html',
  styleUrls: ['./payment-status.component.scss']
})
export class PaymentStatusComponent {

  faBasketShopping = faBasketShopping;

}
