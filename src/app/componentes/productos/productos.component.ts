import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/ModeloProducto.model';
import { MessageService } from 'src/app/servicios/mensaje.service';
import { ProductService } from 'src/app/servicios/producto.service';

@Component({  
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.less']
})
export class ProductosComponent implements OnInit {

  productos!: Producto[];

  constructor(private productoService: ProductService, private msgService: MessageService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
   this.productoService.getProductos()
     .subscribe(productos => this.productos = productos);
  }

}
