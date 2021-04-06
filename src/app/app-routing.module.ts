import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { CheckAuthenticatedGuard } from "./guards/check-authenticated.guard";
import { CheckInAuthenticatedGuard } from "./guards/check-inauthenticated.guard";
import { LogoutComponent } from './pages/auth/logout/logout.component';
import { HistorialComponent } from './pages/historial/historial.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate:[CheckInAuthenticatedGuard]},
  { path: 'logout', component: LogoutComponent, canActivate:[CheckAuthenticatedGuard]},
  { path: 'home', component: HomeComponent, canActivate: [CheckAuthenticatedGuard] },
  { path: 'inventario', component: InventarioComponent, canActivate: [CheckAuthenticatedGuard] },
  { path: 'historial', component: HistorialComponent, canActivate: [CheckAuthenticatedGuard] },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
