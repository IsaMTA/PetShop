import { variable } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { AccesoriosPerroComponent } from '../componentes/accesorios-perro/accesorios-perro.component';
import { Producto } from '../modelos/ModeloProducto.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceCarritoService {
  items:any=[];
  agregarCarrito() {
    
  }
  
  constructor() {
    
   }
}
