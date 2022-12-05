import { Component, OnInit } from '@angular/core'
import { IconoBotonAgregar } from 'src/app/helpers/assets.helper'

@Component({
  selector: 'app-accesorios-gato',
  templateUrl: './accesorios-gato.component.html',
  styleUrls: ['./accesorios-gato.component.less']
})
export class AccesoriosGatoComponent implements OnInit {
  btnAgregar = IconoBotonAgregar

  constructor() {}

  ngOnInit(): void {}
}
