import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  constructor(
    private http:HttpClient
  ) { }

  private getHttpOptions(){
    const token = "Bearer " + this.getToken();

    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: token
      })
    };
  }

  
  private getToken(){
    return localStorage.getItem('ACCESS_TOKEN');
  }

  getListHistorial(fecha:string){
    let fechaFinal = ''
    if (fecha !== '') fechaFinal = new Date(fecha).toISOString().replace('Z','');

    return this.http.post(`${environment.urlApiProductos}/historial`,{ fecha: fechaFinal }, this.getHttpOptions())
      .toPromise()
  }
}
