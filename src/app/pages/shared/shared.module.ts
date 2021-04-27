import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Components
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import { CardMenuComponent } from "./card-menu/card-menu.component";
import { CardProductoComponent } from "./card-producto/card-producto.component";
import { LoaderComponent } from "./loader/loader.component";
import { ModalActualizarInventarioComponent } from "./modal-actualizar-inventario/modal-actualizar-inventario.component";
import { ModalConfirmarComponent } from "./modal-confirmar/modal-confirmar.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { TextoAyudaComponent } from "./texto-ayuda/texto-ayuda.component";

@NgModule({
  declarations: [
    BarraBusquedaComponent,
    CardMenuComponent,
    CardProductoComponent,
    LoaderComponent,
    ModalActualizarInventarioComponent,
    ModalConfirmarComponent,
    NavigationComponent,
    TextoAyudaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    FormsModule,
    CommonModule,
    BarraBusquedaComponent,
    CardMenuComponent,
    CardProductoComponent,
    LoaderComponent,
    ModalActualizarInventarioComponent,
    ModalConfirmarComponent,
    NavigationComponent,
    TextoAyudaComponent
  ]
})
export class SharedModule { }
