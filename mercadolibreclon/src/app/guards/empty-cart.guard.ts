import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root'
})
export class EmptyCartGuard implements CanActivate {

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const isCartEmpty = this.productService.getLength();

      if(isCartEmpty >= 1) {
        return true;
      } else {
        this.router.navigate(['/cart/empty-cart']);
        return false;
      }
  }

}
