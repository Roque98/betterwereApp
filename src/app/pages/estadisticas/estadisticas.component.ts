import { Component, OnInit } from '@angular/core';
import { CardMenu } from '../shared/card-menu/card-menu.interface';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  infoCardMasVendidos: CardMenu = {
    src_image: 'https://images.unsplash.com/photo-1503944168849-8bf86875bbd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80',
    title: 'Los mas vendidos',
    text: 'Observa cuales son los productos que mas veces han salido de tu inventario. Esto te ayudara saber que productos le gustan a tus clientes',
    text_button: 'Entrar a los mas vendidos',
    url: '/estadisticas/mas-vendidos'
  }

  infoCardInventorySize: CardMenu = {
    src_image: 'https://images.unsplash.com/photo-1603232644324-195c9e35bf62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80',
    title: 'Tamaño del inventario',
    text: 'Conoce la cantidad de productos que tienes en tu inventario y cual es el valor monetario de todos ellos',
    text_button: 'Ir al tamaño inventario',
    url: '/estadisticas/size'
  }

  // infoCardLogOut: CardMenu = {
  //   src_image: 'https://images.unsplash.com/photo-1564697259644-03cd5e7363fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  //   title: 'Reporte mensual de ventas',
  //   text: 'Si deseas saber cuantos productos se venden por mes',
  //   text_button: 'Cerrar sesion',
  //   url: '/logout'
  // }
}
