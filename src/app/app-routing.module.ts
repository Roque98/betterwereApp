import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { CheckAuthenticatedGuard } from "./guards/check-authenticated.guard";
import { CheckInAuthenticatedGuard } from "./guards/check-inauthenticated.guard";
import { LogoutComponent } from './pages/auth/logout/logout.component';
import { OrganizarComponent } from './pages/organizar/organizar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate:[CheckInAuthenticatedGuard]},
  { path: 'logout', component: LogoutComponent, canActivate:[CheckAuthenticatedGuard]},
  { path: 'home', component: HomeComponent, canActivate: [CheckAuthenticatedGuard] },
  { 
    path: 'inventario',
    loadChildren: ()=>import('./pages/inventario/inventario.module').then(m=>m.InventarioModule),
    canActivate: [CheckAuthenticatedGuard] 
  },
  { 
    path: 'estadisticas', 
    loadChildren: ()=>import('./pages/estadisticas/estadisticas.module').then(m=>m.EstadisticasModule), 
    canActivate: [CheckAuthenticatedGuard] 
  },
  { 
    path: 'historial', 
    loadChildren: ()=> import('./pages/historial/historial.module').then(m=>m.HistorialModule),
    canActivate: [CheckAuthenticatedGuard] 
  },
  { path: 'organizar', component: OrganizarComponent, canActivate: [CheckAuthenticatedGuard] },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
