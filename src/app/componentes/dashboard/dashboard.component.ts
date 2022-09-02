import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/ModeloProducto.model';
import { ProductService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.ps.getProductos()
      .subscribe(productos => this.productos = productos.slice(1,5))
  }

}
