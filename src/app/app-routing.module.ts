import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProductosComponent } from './componentes/productos/productos.component'
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component'
import { AccesoriosPerroComponent } from './componentes/accesorios-perro/accesorios-perro.component'
import { AccesoriosGatoComponent } from './componentes/accesorios-gato/accesorios-gato.component'
import { NupecComponent } from './componentes/nupec/nupec.component'
import { FulltrustComponent } from './componentes/fulltrust/fulltrust.component'
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component'
import { CarritoCompraComponent } from './componentes/carrito-compra/carrito-compra.component'
import { IndexEmpleadoComponent } from './componentes/index-empleado/index-empleado.component'
import { AltaProductoComponent } from './componentes/alta-producto/alta-producto.component'

const routes: Routes = [
  { path: 'productos', component: ProductosComponent },
  { path: 'detalle/:id', component: DetalleProductoComponent },
  { path: 'accesorios-perro', component: AccesoriosPerroComponent },
  { path: 'accesorios-gato', component: AccesoriosGatoComponent },
  { path: 'nupec', component: NupecComponent },
  { path: 'fulltrust', component: FulltrustComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'carrito-compra', component: CarritoCompraComponent },
  { path: 'index-empleado', component: IndexEmpleadoComponent },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
