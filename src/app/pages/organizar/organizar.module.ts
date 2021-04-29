// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizarRoutingModule } from './organizar-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { OrganizarComponent } from './organizar.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';
import { CardUbicacionComponent } from './components/card-ubicacion/card-ubicacion.component';
import { CardProductoOrganizarComponent } from './components/card-producto-organizar/card-producto-organizar.component';
import { CrearUbicacionComponent } from './pages/crear-ubicacion/crear-ubicacion.component';
import { AddProductosComponent } from './pages/add-productos/add-productos.component';

@NgModule({
  declarations: [
    OrganizarComponent,
    UbicacionComponent,
    CardUbicacionComponent,
    CardProductoOrganizarComponent,
    CrearUbicacionComponent,
    AddProductosComponent
  ],
  imports: [
    CommonModule,
    OrganizarRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class OrganizarModule { }
