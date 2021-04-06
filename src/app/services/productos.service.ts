import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Producto } from '../interface/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url = `${environment.urlApiProductos}/stock`;

  constructor(private http: HttpClient) { }

  getHttpOptions(){
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

  getProductos(valorBuscado: string){
    if(valorBuscado === '') return Promise.resolve([])
    return this.http.get<Producto[]>(`${this.url}/${valorBuscado}`, this.getHttpOptions() )
      .toPromise()
  }

  setStock(codigo_producto: string, nuevoStock: number, informacionHistorial:{ nombre_producto: string, tipo_operacion: 'entrada' | 'salida', cantidad: number }){
    return this.http.post(`${this.url}/${codigo_producto}`, {stock: nuevoStock, informacionHistorial}, this.getHttpOptions())
      .toPromise()
  }

}
