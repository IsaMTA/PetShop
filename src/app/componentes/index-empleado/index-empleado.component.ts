import { Component, OnInit } from '@angular/core'
import {
  IconoEliminar,
  IconoMas,
  IconoNuevoUsario,
  IconoVista
} from 'src/app/helpers/assets.helper'

@Component({
  selector: 'app-index-empleado',
  templateUrl: './index-empleado.component.html',
  styleUrls: ['./index-empleado.component.less']
})
export class IndexEmpleadoComponent implements OnInit {
  btnEliminar = IconoEliminar
  btnMas = IconoMas
  btnNuevoUsuario = IconoNuevoUsario
  btnVista = IconoVista

  constructor() {}

  ngOnInit(): void {}
}
