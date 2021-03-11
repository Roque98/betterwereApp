import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BarcodeScannerLivestreamModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
