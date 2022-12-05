import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent {
  activeMenu = true

  showMenu(event: any) {
    this.activeMenu = event
  }
}
