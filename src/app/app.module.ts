import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigationComponent } from './pages/shared/navigation/navigation.component';
import { BarraBusquedaComponent } from './pages/shared/barra-busqueda/barra-busqueda.component';
import { TextoAyudaComponent } from './pages/shared/texto-ayuda/texto-ayuda.component';
import { ModalActualizarInventarioComponent } from './pages/shared/modal-actualizar-inventario/modal-actualizar-inventario.component';
import { CardMenuComponent } from './pages/shared/card-menu/card-menu.component';
import { ModalConfirmarComponent } from './pages/shared/modal-confirmar/modal-confirmar.component';
import { CardProductoComponent } from './pages/shared/card-producto/card-producto.component';

// the scanner!
import { BarcodeScannerLivestreamModule } from "ngx-barcode-scanner";
import { LectorCodigoBarrasComponent } from './pages/shared/barra-busqueda/lector-codigo-barras/lector-codigo-barras.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { LogoutComponent } from './pages/auth/logout/logout.component';
import { HistorialComponent } from './pages/historial/historial.component';

// Idioma fecha
import localEs from "@angular/common/locales/es";
import { registerLocaleData } from '@angular/common'

registerLocaleData(localEs, 'es')


// auth
export function tokenGetter() {
  return localStorage.getItem("ACCESS_TOKEN");
}

@NgModule({
  declarations: [
    AppComponent,
    InventarioComponent,
    HomeComponent,
    NavigationComponent,
    BarraBusquedaComponent,
    TextoAyudaComponent,
    ModalActualizarInventarioComponent,
    CardMenuComponent,
    LectorCodigoBarrasComponent,
    ModalConfirmarComponent,
    CardProductoComponent,
    LoginComponent,
    LogoutComponent,
    HistorialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      },
    }),
    FormsModule,
    ReactiveFormsModule,
    BarcodeScannerLivestreamModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
