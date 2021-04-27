import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadisticasComponent } from './estadisticas.component';
import { MasVendidosComponent } from './mas-vendidos/mas-vendidos.component';
import { SizeInventoryComponent } from './size-inventory/size-inventory.component';

const routes: Routes = [
  { path: '', component: EstadisticasComponent },
  { path: 'size', component: SizeInventoryComponent },
  { path: 'mas-vendidos', component: MasVendidosComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadisticasRoutingModule {}
