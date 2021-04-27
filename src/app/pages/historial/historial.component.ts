import { Component, OnInit } from '@angular/core';
import { HistorialService } from 'src/app/services/historial.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
})
export class HistorialComponent implements OnInit {
  data = [];
  cargando = false;
  mostrarFiltrosDeBusqueda = false;
  fechaSeleccionada = '';

  constructor(public historialService: HistorialService) {}

  ngOnInit(): void {
    this.getHistorial(this.fechaSeleccionada);
  }

  // private getToday() {
  //   const date = new Date(Date.now()); // Date 2011-05-09T06:08:45.178Z
  //   const year = date.getFullYear();
  //   const month = ('0' + (date.getMonth() + 1)).slice(-2);
  //   const day = ('0' + date.getDate()).slice(-2);
  //   return `${year}-${month}-${day}`;
  // }


  getHistorial($event){
    this.cargando = true;
    this.fechaSeleccionada = $event;
    this.historialService
      .getListHistorial(this.fechaSeleccionada)
      .then((res: any) => {
        this.data = res;
        
      })
      .finally(() => {
        this.cargando = false;
      });
  }

}
