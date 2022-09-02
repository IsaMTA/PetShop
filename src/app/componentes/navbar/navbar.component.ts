import { Component, OnInit } from '@angular/core';
import { LogoIcon } from 'src/app/helpers/assets.helper';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  logo = LogoIcon;

  constructor() { }

  ngOnInit(): void {
  }

}
