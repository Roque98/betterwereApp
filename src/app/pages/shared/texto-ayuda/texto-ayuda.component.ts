import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-texto-ayuda',
  templateUrl: './texto-ayuda.component.html',
  styleUrls: ['./texto-ayuda.component.css']
})
export class TextoAyudaComponent implements OnInit {

  @Input() textoAyuda;

  constructor() { }

  ngOnInit(): void {
  }

}
