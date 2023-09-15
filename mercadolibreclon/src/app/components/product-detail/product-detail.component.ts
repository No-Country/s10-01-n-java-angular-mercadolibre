import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{

  faStar = faStar;
  faArrowRight = faArrowRight;

  product: any;
  cart: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  productId: any;
  productDetails: any;


  ngOnInit() {
    window.scrollTo({ top: 0 });
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    // const products = this.productService.getProducts();
    const products = this.productService.getProductsFake().subscribe((data) => {
      this.product = data.find((p: { id: string | null; }) => p.id === id);
    });

    this.getCart();


    this.route.params.subscribe(params => {
      this.productId = +params['id'];
      this.productService.getProductDetails(this.productId).subscribe((data) => {
        this.productDetails = data;
      });
    });
  }

  addCart(product: any) {
    this.productService.addToCart(product);
  }

  getCart() {
    this.cart = this.productService.getCart();
  }

}
