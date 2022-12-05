import { Component, OnInit } from '@angular/core'
import { IconoBotonAgregar } from 'src/app/helpers/assets.helper'

@Component({
  selector: 'app-accesorios-perro',
  templateUrl: './accesorios-perro.component.html',
  styleUrls: ['./accesorios-perro.component.less']
})
export class AccesoriosPerroComponent implements OnInit {
  btnAgregar = IconoBotonAgregar

  constructor() {}

  ngOnInit(): void {}
}
