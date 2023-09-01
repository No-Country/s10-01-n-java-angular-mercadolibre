import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{

  product: any;
  cart: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    window.scrollTo({ top: 0 });
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    const products = this.productService.getProducts();
    this.product = products.find(p => p.id === id);

    this.getCart();
  }

  addCart(product: any) {
    console.log('addCart', product)
    this.productService.addToCart(product);
  }

  getCart() {
    this.cart = this.productService.getCart();
    console.log('cart desde product detail', this.cart)
  }

}
