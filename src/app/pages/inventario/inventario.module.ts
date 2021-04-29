import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { SharedModule } from '../shared/shared.module';

// Componentes
import { InventarioComponent } from './inventario.component';


@NgModule({
  declarations: [InventarioComponent],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    SharedModule
  ]
})
export class InventarioModule { }
