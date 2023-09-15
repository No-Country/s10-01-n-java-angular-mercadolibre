import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(
    private http: HttpClient) {}



  getProductsFake(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getProductDetails(productId: number): Observable<any> {
    const url = `${this.apiUrl}/${productId}`;
    console.log('fake store elci', url)
    return this.http.get(url);
  }

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
    {
      id: '4',
      image: 'https://images.unsplash.com/photo-1467916971207-e78d69dbe744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      images: ['https://images.unsplash.com/photo-1542395118-9d95347995bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80', 'https://images.unsplash.com/photo-1597075383833-a10d2f819ca9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80', 'https://images.unsplash.com/photo-1526979118433-63c7344f06f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'],
      title: 'Tocadiscos del alma',
      price: 250000,
      cuotas: 250000 / 6,
      shipping: 'Gratis'
    }
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

  clearCart() {
    this.cart = [];
  }

}
