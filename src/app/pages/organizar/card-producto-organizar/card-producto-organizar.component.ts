import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Ubicacion from 'src/app/interface/ubicacion.interface';

@Component({
  selector: 'app-card-producto-organizar',
  templateUrl: './card-producto-organizar.component.html',
  styleUrls: ['./card-producto-organizar.component.css']
})
export class CardProductoOrganizarComponent implements OnInit {

  @Input() ubicacion: Ubicacion;
  @ViewChild('txtNombreUbicacion') txtNombreUbicacion: ElementRef;
  editando = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleEditar(){
    this.editando = !this.editando;


    setTimeout(()=>{ // this will make the execution after the above boolean has changed
        this.txtNombreUbicacion.nativeElement.focus()
    },0);  
  }
}
