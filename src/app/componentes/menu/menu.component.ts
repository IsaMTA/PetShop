import { CategoriasService } from './../../servicios/categorias.service'
import { Component, OnInit } from '@angular/core'
import { NavigationStart, Router } from '@angular/router'
import {
  IconoCarrito,
  IconoMenu,
  IconoPetshop
} from 'src/app/helpers/assets.helper'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  iconoPetshop = IconoPetshop
  iconoCarrito = IconoCarrito
  iconoMenu = IconoMenu

  constructor(
    private router: Router,
    private categoriasService: CategoriasService
  ) {}

  bandera = false
  totalProductos = 0
  menuActivo = false
  accesoriosActivo = false
  alimentosActivo = false

  categorias: any[]

  ngOnInit(): void {
    this.categoriasService
      .getCategorias()
      .subscribe((categorias) => (this.categorias = categorias))
  }

  abrirMenu() {
    this.menuActivo = !this.menuActivo
  }

  abrirAlimentos() {
    this.alimentosActivo = !this.alimentosActivo
  }

  abrirAccesorios() {
    this.accesoriosActivo = !this.accesoriosActivo
  }

  get accesorios() {
    if (this.categorias) {
      for (let i = 0; i < this.categorias.length; i++) {
        if (this.categorias[i].key == 'accesorio') {
          return this.categorias[i]
        }
      }
    }
    return []
  }

  get alimentos() {
    if (this.categorias) {
      for (let i = 0; i < this.categorias.length; i++) {
        if (this.categorias[i].key == 'alimento') {
          return this.categorias[i]
        }
      }
    }
    return []
  }
}
