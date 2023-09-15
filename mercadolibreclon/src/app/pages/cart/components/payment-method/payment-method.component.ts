import { Component } from '@angular/core';
import { faArrowLeft, faArrowRight  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent {

  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
}
