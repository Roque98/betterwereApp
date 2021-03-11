import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productosData } from "../data/products.data";
import { environment } from 'src/environments/environment';
import { Producto } from '../interface/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos = [...productosData];
  url = `${environment.urlApiProductos}/productos`;

  constructor(private http: HttpClient) { }


  getProductos(valorBuscado: string){
    if(valorBuscado === '') return Promise.resolve([])
    return this.http.get<Producto[]>(`${this.url}/${valorBuscado}`)
      .toPromise()
  }

  setStock(_id: string, nuevoStock: number){
    return this.http.patch(`${this.url}/${_id}`, {stock: nuevoStock})
      .toPromise()
  }

  // getProductosMockData(valorBuscado: string) {
  //   if(valorBuscado === '') return;

  //   valorBuscado = valorBuscado.toUpperCase();
    
  //   return this.productos.filter(({ codigoProducto, nombreProducto }) => nombreProducto.toUpperCase().includes(valorBuscado) || codigoProducto.toString().toUpperCase().includes(valorBuscado))
  // }

  // setStockMockData(codigoProducto: number, cantidadNuevosProductos: number){
  //   this.productos.forEach((producto) => {
  //     if(producto.codigoProducto === codigoProducto){
  //       producto.stock += cantidadNuevosProductos;
  //     }
  //   })
  // }
}
