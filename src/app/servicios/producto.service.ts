import { Injectable } from '@angular/core'
import { Producto } from '../modelos/ModeloProducto.model'
import { PRODUCTOS } from '../test/mock-productos'
import { map, Observable, of } from 'rxjs'
import { MessageService } from './mensaje.service'
import { AngularFireDatabase } from '@angular/fire/compat/database'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private msgService: MessageService,
    private db: AngularFireDatabase
  ) {}

  getProductos(): Observable<Producto[]> {
    this.msgService.add('ProductService: Productos obtenidos')
    return of(PRODUCTOS)
  }

  getProducto(id: number): Producto {
    this.msgService.add(`ProductService: Producto obtenido id=${id}`)
    for (let i = 0; i < PRODUCTOS.length; i++)
      if (PRODUCTOS[i].id == id) return PRODUCTOS[i]
    return PRODUCTOS[0]
  }

  getListaProductos() {
    return this.db
      .list('productos')
      .snapshotChanges()
      .pipe(
        map((change) =>
          change.map((c) => ({
            key: c.payload.key,
            ...(c.payload.val() as Record<string, unknown>)
          }))
        )
      )
  }

  getAlimentos(marca: string, productos: any[]) {
    let auxProductos: any[] = []

    productos.forEach((producto) => {
      if (
        producto.categoria &&
        producto.categoria.alimento &&
        producto.categoria.alimento.marca === marca
      ) {
        auxProductos.push(producto)
      }
    })

    return auxProductos
  }

  getAccesorios(tipo: string, productos: any[]) {
    let auxProductos: any[] = []

    productos.forEach((producto) => {
      if (
        producto.categoria &&
        producto.categoria.accesorio &&
        producto.categoria.accesorio.tipo === tipo
      ) {
        auxProductos.push(producto)
      }
    })

    return auxProductos
  }
}
