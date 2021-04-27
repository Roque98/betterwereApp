import { Injectable } from '@angular/core';
import Ubicacion from '../interface/ubicacion.interface';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  
  ubicaciones:Ubicacion[] = [
    {nombre_ubicacion: 'Mueble A' },
    {nombre_ubicacion: 'Mueble B' },
    {nombre_ubicacion: 'Mueble C' },
    {nombre_ubicacion: 'Mueble D' },
  ]
  
  constructor() { }

  getUbicaciones(){
    return Promise.resolve(this.ubicaciones);
  }
}
