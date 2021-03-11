import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Modal } from 'src/app/interface/modal.interface';

@Component({
  selector: 'app-modal-actualizar-inventario',
  templateUrl: './modal-actualizar-inventario.component.html',
  styleUrls: ['./modal-actualizar-inventario.component.css']
})
export class ModalActualizarInventarioComponent implements OnInit {

  @Input() data: Modal;
  @Output() emitirEvento = new EventEmitter<number>();
  valorInput: number = 1;

  constructor() { }

  ngOnInit(): void {
  }



  agregarStock(){
    if(this.valorInput <= 0 ) {
      alert('Debes agregar una cantidad mayor a 0')
      return;
    }
    this.emitirEvento.emit(this.valorInput);
  }

  removerStock(){
    if(this.valorInput <= 0 ) {
      alert('Debes retirar una cantidad de productos mayor a 0')
      return;
    }
    if(this.valorInput > this.data.producto.stock ) {
      alert('Debes retirar una cantidad de productos menor a la cantidad disponible de stock')
      return;
    }
    this.emitirEvento.emit(-this.valorInput);
  }

  cancelar(){
    this.emitirEvento.emit(0);
  }
}
