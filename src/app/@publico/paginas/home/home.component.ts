import { Component, OnInit } from '@angular/core'
import {
  FancyPetsImg,
  AdultoCorderImg,
  MedicalImg
} from 'src/app/helpers/assets.helper'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  img1 = FancyPetsImg
  img2 = AdultoCorderImg
  img3 = MedicalImg

  constructor() {}

  ngOnInit(): void {}
}
