import { Component, OnInit } from '@angular/core';
import Ubicacion from 'src/app/interface/ubicacion.interface';

@Component({
  selector: 'app-organizar',
  templateUrl: './organizar.component.html',
  styleUrls: ['./organizar.component.css']
})
export class OrganizarComponent implements OnInit {

  textoAyuda = 'Crea una nueva ubicacion, presiona sobre ella y asignale productos'
  ubicaciones:Ubicacion[];

  constructor() { }

  ngOnInit(): void {
  }

}
