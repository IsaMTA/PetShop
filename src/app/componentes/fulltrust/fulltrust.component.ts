import { Component, OnInit } from '@angular/core'
import { IconoBotonAgregar } from 'src/app/helpers/assets.helper'

@Component({
  selector: 'app-fulltrust',
  templateUrl: './fulltrust.component.html',
  styleUrls: ['./fulltrust.component.less']
})
export class FulltrustComponent implements OnInit {
  btnAgregar = IconoBotonAgregar

  constructor() {}

  ngOnInit(): void {}
}
