import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  

import { HistorialRoutingModule } from './historial-routing.module';
import { SharedModule } from '../shared/shared.module';

// Components
import { HistorialComponent } from './historial.component';


@NgModule({
  declarations: [HistorialComponent],
  imports: [
    CommonModule,
    HistorialRoutingModule,
    SharedModule,
  ]
})
export class HistorialModule { }
