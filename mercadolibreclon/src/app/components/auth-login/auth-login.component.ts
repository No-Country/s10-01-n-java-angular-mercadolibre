import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { LoginRequest } from 'src/app/services/auth/loginRequest';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent {
  loginError: string="";
  loginForm=this.formBuilder.group({
      email:['prueba@gmail.com',[Validators.required,Validators.email]],
      password: ['',[Validators.required]],
    }
  )
  constructor(private formBuilder: FormBuilder, private router:Router, private loginService: LoginService){}
  get email(){
    return this.loginForm.controls.email;
  }
  get password()
  {
    return this.loginForm.controls.password;
  }
  login(){
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData)=>{
          console.info(userData);
        },
        error: (errorData)=>{
          console.error(errorData);
          this.loginError=errorData;
        },
        complete: ()=>{
          console.info("El login se ha completado");
          this.router.navigateByUrl("/inicio");
          this.loginForm.reset();
        }
      });
      //console.log("llamar al servicio de login"); reemplazado por loginService
    }
    else{
      this.loginForm.markAllAsTouched();
      alert("error en los campos");
    }
  }
}
