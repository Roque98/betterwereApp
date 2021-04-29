import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Ubicacion from '../interface/ubicacion.inteface';

@Injectable({
  providedIn: 'root',
})
export class UbicacionService {

  constructor(private http: HttpClient) {}

  private getHttpOptions() {
    const token = 'Bearer ' + this.getToken();

    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token,
      }),
    };
  }

  private getToken() {
    return localStorage.getItem('ACCESS_TOKEN');
  }

  createUbicacion(ubicacion: Ubicacion) {
    return this.http.post(environment.urlApiProductos + '/ubicacion', ubicacion,  this.getHttpOptions())
      .toPromise();
  }

  listUbicaciones() {
    return this.http.get<Ubicacion[]>(environment.urlApiProductos + '/ubicacion', this.getHttpOptions())
      .toPromise();
  }

  getUbicacion(idUbicacion:string){
    return this.http.get(`${environment.urlApiProductos}/ubicacion/${idUbicacion}`, this.getHttpOptions())
      .toPromise();
  }

  updateUbicacion(idUbicacion: string, nombre_ubicacion: string){
    return this.http.patch(`${environment.urlApiProductos}/ubicacion/${idUbicacion}`, { nombre_ubicacion }, this.getHttpOptions())
      .toPromise();
  }

  deleteUbicacion(idUbicacion:string){
    return this.http.delete(`${environment.urlApiProductos}/ubicacion/${idUbicacion}`,  this.getHttpOptions())
      .toPromise();
  }

  // Producto
  insertProducto(id_ubicacion:string, id_producto:string){
    return this.http.post(environment.urlApiProductos + '/ubicacion/producto/' + id_ubicacion, {id_producto},  this.getHttpOptions())
      .toPromise();
  }

  deleteProducto(id_ubicacion:string, id_producto:string){
    return this.http.patch(environment.urlApiProductos + '/ubicacion/producto/' + id_ubicacion, {id_producto},  this.getHttpOptions())
      .toPromise();
  }
}
