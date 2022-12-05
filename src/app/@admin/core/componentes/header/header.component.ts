import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { MenuIcon } from 'src/app/helpers/assets.helper'

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  dots = MenuIcon
  toggledValue = false
  @Output() showMenuEvent = new EventEmitter<boolean>()

  toggled() {
    if (this.toggledValue === undefined) {
      this.toggledValue = true
    }
    this.toggledValue = !this.toggledValue
    this.showMenuEvent.emit(this.toggledValue)
  }
}
