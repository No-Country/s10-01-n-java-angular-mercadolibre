import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy{
  userLoginOn:boolean=false;
  constructor(private loginService:LoginService) { }
  ngOnDestroy(): void {
    this.loginService.currentUserLoginOn.unsubscribe();
  }
  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe(
      {
        next:(userLoginOn) => {
          this.userLoginOn=userLoginOn;
        }
      }
    )
  }

  //esto es exclusivo de la nav de prueba para el login
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
}
