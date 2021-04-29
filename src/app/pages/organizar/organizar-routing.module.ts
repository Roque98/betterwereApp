import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizarComponent } from './organizar.component';
import { AddProductosComponent } from './pages/add-productos/add-productos.component';
import { CrearUbicacionComponent } from './pages/crear-ubicacion/crear-ubicacion.component';
import { UbicacionComponent } from './pages/ubicacion/ubicacion.component';

const routes: Routes = [
  { path:"", component: OrganizarComponent },
  { path:"ubicacion/:id", component: UbicacionComponent },
  { path:"crear-ubicacion", component: CrearUbicacionComponent },
  { path:"agregar-producto/:idUbicacion", component: AddProductosComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizarRoutingModule { }
