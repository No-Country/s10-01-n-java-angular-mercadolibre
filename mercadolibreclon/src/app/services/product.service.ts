import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  cart: any[] = [];

  cards = [
    {
      id: '1',
      image: './../../../assets/images/home/motorola.png',
      title: 'Moto E22 gb 2 gb Ram Gris 1',
      price: 49000,
      cuotas: 49000 / 6,
      shipping: 'Envío gratis'
    },
    {
      id: '2',
      image: './../../../assets/images/home/motorola.png',
      title: 'Moto E22 gb 2 gb Ram Gris 2',
      price: 69000,
      cuotas: 69000 / 6,
      shipping: 'Envío gratis'
    },
    {
      id: '3',
      image: './../../../assets/images/home/motorola.png',
      title: 'Moto E22 gb 2 gb Ram Gris 3',
      price: 89000,
      cuotas: 89000 / 6,
      shipping: 'Envío gratis'
    },
  ]

  getProducts() {
    return this.cards;
  }

  addToCart(product: any) {
    return this.cart.push(product);
  }

  getCart() {
    return this.cart;
  }

  getLength() {
    return this.cart.length;
  }

}
