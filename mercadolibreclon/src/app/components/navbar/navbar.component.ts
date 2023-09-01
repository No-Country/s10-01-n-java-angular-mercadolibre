import { Component } from '@angular/core';
import { faLocationDot, faBars, faSearch, faCartShopping  } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  cartLength = 0;

  faLocationDot = faLocationDot;
  faBars = faBars;
  faSearch = faSearch;
  faCartShopping = faCartShopping;

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.getLength();
  }

  getLength() {
    return this.productService.getLength();
  }

}
