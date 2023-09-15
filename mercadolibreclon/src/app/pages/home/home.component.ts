import { Component } from '@angular/core';
import { faShippingFast, faLocationDot  } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  cards: any;

  faShippingFast = faShippingFast;
  faLocationDot = faLocationDot;

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit() {
    // this.cards = this.productService.getProducts();

    this.productService.getProductsFake().subscribe((data) => {
      this.cards = data;
    });
  }
}
