import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/interface/producto.interface';

@Component({
  selector: 'app-card-producto-organizar',
  templateUrl: './card-producto-organizar.component.html',
  styleUrls: ['./card-producto-organizar.component.css']
})
export class CardProductoOrganizarComponent implements OnInit {

  @Input() producto:Producto;
  @Input() agregar:boolean;
  @Output() newItemEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  emitirEvento(){
    this.newItemEvent.emit(1);
  }

}
