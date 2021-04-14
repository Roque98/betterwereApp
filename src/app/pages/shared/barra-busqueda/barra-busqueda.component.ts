import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.css']
})
export class BarraBusquedaComponent implements OnInit {

  @Output() contenidoInputEmmiter = new EventEmitter<string>();
  contenidoInput='';
  scanerDisponible = false;

  constructor() { }

  ngOnInit(): void {
  }

  emitirCambio(){
    
    this.contenidoInputEmmiter.emit(this.contenidoInput)
  }

  iniciarScanner(){
    this.scanerDisponible = true;
  }

  addItem($event){
    this.contenidoInput = $event;
    this.scanerDisponible = false;
    this.emitirCambio();
  }

  clearInput(){
    this.contenidoInput = '';
    this.emitirCambio;
  }
}
