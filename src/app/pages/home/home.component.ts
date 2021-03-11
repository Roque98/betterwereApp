import { Component, OnInit } from '@angular/core';
import { CardMenu } from '../shared/card-menu/card-menu.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  infoCardInventario: CardMenu = {
    src_image: 'assets/images/agregarProductos.jpg',
    title: 'Inventario',
    text: 'Registra los nuevos productos que llegaron a tu inventario o retira los productos que estan por salir',
    text_button: 'Entrar al inventario',
    url: '/inventario'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
