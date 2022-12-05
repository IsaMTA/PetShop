import { Component, OnInit } from '@angular/core'
import { IconoBotonAgregar } from 'src/app/helpers/assets.helper'

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.less']
})
export class CarritoCompraComponent implements OnInit {
  btnAgregar = IconoBotonAgregar

  constructor() {}

  ngOnInit(): void {}
}
