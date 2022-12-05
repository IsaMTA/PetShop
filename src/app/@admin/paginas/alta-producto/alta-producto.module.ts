import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AltaProductoRoutingModule } from './alta-producto-routing.module';
import { AltaProductoComponent } from './alta-producto.component';


@NgModule({
  declarations: [
    AltaProductoComponent
  ],
  imports: [
    CommonModule,
    AltaProductoRoutingModule
  ]
})
export class AltaProductoModule { }
