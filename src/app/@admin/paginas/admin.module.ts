import { TituloComponent } from './../core/componentes/titulo/titulo.component'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AdminRoutingModule } from './admin-routing.module'
import { AdminComponent } from './admin.component'
import { HeaderComponent } from '../core/componentes/header/header.component';
import { SidebarComponent } from '../core/componentes/sidebar/sidebar.component'

@NgModule({
  declarations: [AdminComponent, HeaderComponent, TituloComponent, SidebarComponent],
  imports: [CommonModule, AdminRoutingModule]
})
export class AdminModule {}
