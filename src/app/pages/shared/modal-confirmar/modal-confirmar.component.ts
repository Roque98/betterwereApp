import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Modal } from 'src/app/interface/modal.interface';


@Component({
  selector: 'app-modal-confirmar',
  templateUrl: './modal-confirmar.component.html',
  styleUrls: ['./modal-confirmar.component.css']
})
export class ModalConfirmarComponent implements OnInit {

  @Input() data: Modal;
  @Output() emitirEvento = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  emitir(confirmar: boolean){  
    this.emitirEvento.emit(confirmar);
  }
  
}
