import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import  { Observable, throwError, catchError, BehaviorSubject , tap} from 'rxjs';
import { User } from './user'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<User> =new BehaviorSubject<User>({id:0, email:''});
  //reemplazar id y email con datos de la api y el jason web token
  constructor(private http: HttpClient) { }
  login(credentials:LoginRequest):Observable<User>{
    return this.http.get<User>("././assets/data.json").pipe(
      tap( (userData: User) => {
        this.currentUserData.next(userData);
        this.currentUserLoginOn.next(true);
      }),
      catchError(this.handleError)
    );
    }
    //aqui la api del server-> return this.http.get("API_AQUI");
    //console.log(credentials);
    private handleError(error:HttpErrorResponse){
      //importante para saber del backend
      if(error.status===0){
        console.error('Se ha producio un error ', error.error);
      }
      else{
        console.error('Backend devolvió el código de estado ', error.status, error.error);
      }
      return throwError(()=> new Error('Algo falló. Por favor intente nuevamente.'));
    }
    get userData():Observable<User>{
      return this.currentUserData.asObservable();
    }
    get userLoginOn(): Observable<boolean>{
      return this.currentUserLoginOn.asObservable();
    }
}
