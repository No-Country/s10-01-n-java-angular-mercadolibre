import { Component, OnInit, OnDestroy } from '@angular/core';
import { faLocationDot, faBars, faSearch, faCartShopping, faUserCircle, faHome, faMagnifyingGlass, faShoppingBag, faTag, faClock, faHeadset, faBasketShopping, faShirt, faStar, faStore, faList, faFileLines, faRectangleAd, faSignOutAlt  } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/services/product.service';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  cartLength = 0;

  faLocationDot = faLocationDot;
  faBars = faBars;
  faSearch = faSearch;
  faCartShopping = faCartShopping;

  faUserCircle = faUserCircle;
  faHome = faHome;
  faMagnifyingGlass = faMagnifyingGlass;
  faShoppingBag = faShoppingBag;
  faTag = faTag;
  faClock = faClock;
  faHeadset = faHeadset;
  faBasketShopping = faBasketShopping;
  faShirt = faShirt;
  faStar = faStar;
  faStore = faStore;
  faList = faList;
  faFileLines = faFileLines;
  faRectangleAd = faRectangleAd;
  faSignOutAlt = faSignOutAlt;

  constructor(
    private productService: ProductService,
    private loginService: LoginService) {}

  ngOnInit() {
    this.getLength();
    this.loginService.currentUserLoginOn.subscribe(
      {
        next:(userLoginOn) => {
          this.userLoginOn = userLoginOn;
        }
      }
    )
  }

  getLength() {
    return this.productService.getLength();
  }

  userLoginOn:boolean=false;


  /* cambiar por método onLogout */
  ngOnDestroy(): void {
    this.loginService.currentUserLoginOn.unsubscribe();
  }


  //esto es exclusivo de la nav de prueba para el login
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }


}
