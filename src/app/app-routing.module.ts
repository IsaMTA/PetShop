import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './componentes/productos/productos.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { AccesoriosPerroComponent } from './componentes/accesorios-perro/accesorios-perro.component';
import { BanersComponent } from './componentes/baners/baners.component';
import { AccesoriosGatoComponent } from './componentes/accesorios-gato/accesorios-gato.component';
import { NupecComponent } from './componentes/nupec/nupec.component';
import { FulltrustComponent } from './componentes/fulltrust/fulltrust.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { CarritoCompraComponent } from './componentes/carrito-compra/carrito-compra.component';
import { IndexEmpleadoComponent } from './componentes/index-empleado/index-empleado.component';
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component';


const routes: Routes = [
{ path: '', redirectTo: '/PaginaPrincipal', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'detalle/:id', component: DetalleProductoComponent },
  { path: 'accesorios-perro', component: AccesoriosPerroComponent},
  { path: 'PaginaPrincipal', component: BanersComponent},
  { path: 'accesorios-gato', component: AccesoriosGatoComponent},
  { path: 'nupec', component: NupecComponent},
  { path: 'fulltrust', component: FulltrustComponent},
  { path: 'iniciar-sesion', component: IniciarSesionComponent},
  { path: 'carrito-compra', component: CarritoCompraComponent},
  { path: 'index-empleado', component: IndexEmpleadoComponent},
  { path: 'alta-producto', component: AltaProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }