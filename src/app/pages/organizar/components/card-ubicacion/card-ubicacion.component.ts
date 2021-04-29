import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Ubicacion from 'src/app/interface/ubicacion.inteface';

@Component({
  selector: 'app-card-ubicacion',
  templateUrl: './card-ubicacion.component.html',
  styleUrls: ['./card-ubicacion.component.css'],
})
export class CardUbicacionComponent implements OnInit {
  @Input() ubicacion: Ubicacion;
  @Output() newItemEvent = new EventEmitter<number>();
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  navigate(){
    this.router.navigateByUrl('/organizar/ubicacion/' + this.ubicacion._id);
  }

  enviarEventoEliminar(){
    this.newItemEvent.emit(1);
  }
}
