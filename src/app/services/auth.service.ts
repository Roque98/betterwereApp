import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient,
    public jwtHelper: JwtHelperService,
    private router: Router
  ) { }
  
  login(email:string, password: string){
    const userCoded = "Basic " + btoa(`${email}:${password}`);


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: userCoded
      })
    };
    
    return this.http.post(`${environment.urlApiProductos}/login`, {} , httpOptions)
      .toPromise()
  }

  logout(){
    this.router.navigateByUrl('/login')
    localStorage.removeItem("ACCESS_TOKEN");
  }

  public saveToken(token: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
  }

  public redirectToHomePage(){
    this.router.navigateByUrl('/home')
  }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('ACCESS_TOKEN');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token)
    
  }
}
