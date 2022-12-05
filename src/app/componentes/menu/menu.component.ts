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

  constructor(private router: Router) {}

  bandera = false
  totalProductos = 0
  menuActivo = false
  accesoriosActivo = false
  alimentosActivo = false

  ngOnInit(): void {}

  abrirMenu() {
    this.menuActivo = !this.menuActivo
  }

  abrirAlimentos() {
    this.alimentosActivo = !this.alimentosActivo
  }

  abrirAccesorios() {
    this.accesoriosActivo = !this.accesoriosActivo
  }
}
