import { Component, OnInit } from '@angular/core'
import { IconoBotonAgregar } from 'src/app/helpers/assets.helper'
import { ProductService } from 'src/app/servicios/producto.service'

@Component({
  selector: 'app-nupec',
  templateUrl: './nupec.component.html',
  styleUrls: ['./nupec.component.less']
})
export class NupecComponent implements OnInit {
  btnAgregar = IconoBotonAgregar

  productos: any[]

  constructor(private productoService: ProductService) {}

  ngOnInit(): void {
    this.productoService
      .getAllProductos()
      .subscribe((productos) => (this.productos = productos))
  }

  get productosFiltrados() {
    if (this.productos)
      return this.productoService.getAlimentos('nupec', this.productos)
    return null
  }

  getImagenProducto(producto: any) {
    return producto && producto.img ? producto.img.url : null
  }

  getPrecio(producto: any) {
    return producto && producto.precio ? producto.precio.toFixed(2) : null
  }

  get totalRenglones() {
    if (this.productosFiltrados) {
      const total = this.productosFiltrados.length
      let cantidad = total / 4
      if (total % 4 != 0) cantidad++
      return cantidad
    }
    return null
  }

  get listaRenglones() {
    if (this.totalRenglones && this.productosFiltrados) {
      let auxLista = [],
        z = 0
      for (let i = 0; i < this.totalRenglones; i++) {
        let auxProductos = []
        for (let j = 0; j < 4; j++, z++) {
          if (z < this.productosFiltrados.length) {
            auxProductos.push(this.productosFiltrados[z])
          }
        }
        auxLista.push(auxProductos)
      }
      return auxLista
    }
    return null
  }
}
