import { Component, OnInit } from '@angular/core';
import { CardMenu } from '../shared/card-menu/card-menu.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  infoCardInventario: CardMenu = {
    src_image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    title: 'Inventario',
    text: 'Registra los nuevos productos que llegaron a tu inventario o retira los productos que estan por salir',
    text_button: 'Entrar al inventario',
    url: '/inventario'
  }

  infoCardHistorial: CardMenu = {
    src_image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    title: 'Historial',
    text: 'Conoce los cambios que ha tenido tu inventario.',
    text_button: 'Ir al historial',
    url: '/historial'
  }

  infoCardLogOut: CardMenu = {
    src_image: 'https://images.unsplash.com/photo-1564697259644-03cd5e7363fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    title: 'Cerrar sesion',
    text: 'Si deseas cerrar tu sesion o acceder desde otra cuenta entonces presiona el boton de cerrar sesion.',
    text_button: 'Cerrar sesion',
    url: '/logout'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
