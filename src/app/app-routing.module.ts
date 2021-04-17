import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { CheckAuthenticatedGuard } from "./guards/check-authenticated.guard";
import { CheckInAuthenticatedGuard } from "./guards/check-inauthenticated.guard";
import { LogoutComponent } from './pages/auth/logout/logout.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';
import { SizeInventoryComponent } from './pages/estadisticas/size-inventory/size-inventory.component';
import { MasVendidosComponent } from './pages/estadisticas/mas-vendidos/mas-vendidos.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate:[CheckInAuthenticatedGuard]},
  { path: 'logout', component: LogoutComponent, canActivate:[CheckAuthenticatedGuard]},
  { path: 'home', component: HomeComponent, canActivate: [CheckAuthenticatedGuard] },
  { path: 'inventario', component: InventarioComponent, canActivate: [CheckAuthenticatedGuard] },
  { path: 'estadisticas', component: EstadisticasComponent, canActivate: [CheckAuthenticatedGuard] },
  { path: 'estadisticas/size', component: SizeInventoryComponent, canActivate: [CheckAuthenticatedGuard] },
  { path: 'estadisticas/mas-vendidos', component: MasVendidosComponent, canActivate: [CheckAuthenticatedGuard] },
  { path: 'historial', component: HistorialComponent, canActivate: [CheckAuthenticatedGuard] },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
