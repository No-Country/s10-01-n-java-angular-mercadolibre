import { Component } from '@angular/core';
import { faShippingFast, faLocationDot  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  faShippingFast = faShippingFast;
  faLocationDot = faLocationDot;

  cards = [
    {
      image: './../../../assets/images/home/motorola.png',
      title: 'Moto E22 gb 2 gb Ram Gris 1',
      price: 49000,
      cuotas: 49000 / 6,
      shipping: 'Envío gratis'
    },
    {
      image: './../../../assets/images/home/motorola.png',
      title: 'Moto E22 gb 2 gb Ram Gris 2',
      price: 69000,
      cuotas: 69000 / 6,
      shipping: 'Envío gratis'
    },
    {
      image: './../../../assets/images/home/motorola.png',
      title: 'Moto E22 gb 2 gb Ram Gris 3',
      price: 89000,
      cuotas: 89000 / 6,
      shipping: 'Envío gratis'
    },
  ]
}
