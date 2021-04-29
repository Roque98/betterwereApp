import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';
import { EstadisticasRoutingModule } from './estadisticas-routing.module';

// Components
import { EstadisticasComponent } from './estadisticas.component';
import { SizeInventoryComponent } from './size-inventory/size-inventory.component';
import { MasVendidosComponent } from './mas-vendidos/mas-vendidos.component';


@NgModule({
  declarations: [
    EstadisticasComponent,
    SizeInventoryComponent,
    MasVendidosComponent
  ],
  imports: [
    CommonModule,
    EstadisticasRoutingModule,
    SharedModule,
    ChartsModule
  ]
})
export class EstadisticasModule { }
