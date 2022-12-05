import { Component, OnInit } from '@angular/core'
import { IconoBotonAgregar } from 'src/app/helpers/assets.helper'

@Component({
  selector: 'app-nupec',
  templateUrl: './nupec.component.html',
  styleUrls: ['./nupec.component.less']
})
export class NupecComponent implements OnInit {
  btnAgregar = IconoBotonAgregar

  constructor() {}

  ngOnInit(): void {}
}
