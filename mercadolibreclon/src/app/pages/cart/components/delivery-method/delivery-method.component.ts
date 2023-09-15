import { Component } from '@angular/core';
import { faArrowLeft, faArrowRight  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-delivery-method',
  templateUrl: './delivery-method.component.html',
  styleUrls: ['./delivery-method.component.scss']
})
export class DeliveryMethodComponent {

  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

}
