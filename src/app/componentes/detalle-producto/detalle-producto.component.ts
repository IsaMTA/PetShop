import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/ModeloProducto.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from 'src/app/servicios/producto.service';
import { FlechaIzq } from 'src/app/helpers/assets.helper';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.less']
})
export class DetalleProductoComponent implements OnInit {
  returnIcon = FlechaIzq;

  producto!: Producto;

  constructor(
    private route: ActivatedRoute,
    private pS: ProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProducto();
  }

  getProducto() {
    const idString = this.route.snapshot.paramMap.get('id');
    const id: number = idString ? parseInt(idString, 10) : 0;
    if (id)
      this.producto = this.pS.getProducto(id);
  }

  volver() {
    this.location.back();
  }

}
