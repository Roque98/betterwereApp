import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { LogoutComponent } from './pages/auth/logout/logout.component';
import { CardProductoOrganizarComponent } from './pages/organizar/card-producto-organizar/card-producto-organizar.component';
import { OrganizarComponent } from './pages/organizar/organizar.component';

// the scanner!
import { BarcodeScannerLivestreamModule } from "ngx-barcode-scanner";

// jwt
import { JwtModule } from '@auth0/angular-jwt';

// Idioma fecha
import localEs from "@angular/common/locales/es";
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs, 'es')

// Modulos
import { SharedModule } from './pages/shared/shared.module';

// Servicios
import { ProductosService } from './services/productos.service';
import { HistorialService } from './services/historial.service';
import { AuthService } from './services/auth.service';
import { UbicacionService } from './services/ubicacion.service';



// auth
export function tokenGetter() {
  return localStorage.getItem("ACCESS_TOKEN");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    OrganizarComponent,
    CardProductoOrganizarComponent
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
    BarcodeScannerLivestreamModule,
    SharedModule
  ],
  providers: [ 
    { provide: LOCALE_ID, useValue: 'es' } ,
    ProductosService,
    HistorialService,
    AuthService,
    UbicacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
