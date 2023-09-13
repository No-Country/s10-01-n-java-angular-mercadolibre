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
      shipping: 'Gratis'
    },
    {
      id: '2',
      image: './../../../assets/images/home/motorola.png',
      title: 'Moto E22 gb 2 gb Ram Gris 2',
      price: 69000,
      cuotas: 69000 / 6,
      shipping: 'Gratis'
    },
    {
      id: '3',
      image: './../../../assets/images/home/motorola.png',
      title: 'Moto E22 gb 2 gb Ram Gris 3',
      price: 89000,
      cuotas: 89000 / 6,
      shipping: 'Gratis'
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

  removeFromCart(productId: string) {
    const index = this.cart.findIndex(product => product.id === productId);
    if (index !== -1) {
      this.cart.splice(index, 1);

    }
  }
}
