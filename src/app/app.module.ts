import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { MensajesComponent } from './componentes/mensajes/mensajes.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { BanersComponent } from './componentes/baners/baners.component';
import { PieComponent } from './componentes/pie/pie.component';
import { AccesoriosPerroComponent } from './componentes/accesorios-perro/accesorios-perro.component';
import { AccesoriosGatoComponent } from './componentes/accesorios-gato/accesorios-gato.component';
import { NupecComponent } from './componentes/nupec/nupec.component';
import { FulltrustComponent } from './componentes/fulltrust/fulltrust.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { CarritoCompraComponent } from './componentes/carrito-compra/carrito-compra.component';
import { IndexEmpleadoComponent } from './componentes/index-empleado/index-empleado.component';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    DetalleProductoComponent,
    MensajesComponent,
    NavbarComponent,
    DashboardComponent,
    MenuComponent,
    BanersComponent,
    PieComponent,
    AccesoriosPerroComponent,
    AccesoriosGatoComponent,
    NupecComponent,
    FulltrustComponent,
    IniciarSesionComponent,
    CarritoCompraComponent,
    IndexEmpleadoComponent,
    AltaProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
