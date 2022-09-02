import { Injectable } from '@angular/core';
import { Producto } from '../modelos/ModeloProducto.model';
import { PRODUCTOS } from '../test/mock-productos';
import { Observable, of } from 'rxjs';
import { MessageService } from './mensaje.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private msgService: MessageService) { }

  getProductos(): Observable<Producto[]> {
    this.msgService.add('ProductService: Productos obtenidos');
    return of(PRODUCTOS);
  }
  

  getProducto(id: number): Producto {
    this.msgService.add(`ProductService: Producto obtenido id=${id}`);
    for (let i = 0; i < PRODUCTOS.length; i++)
      if (PRODUCTOS[i].id == id)
        return PRODUCTOS[i]
    return PRODUCTOS[0];
  }
}
