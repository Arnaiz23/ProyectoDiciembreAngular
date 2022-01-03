import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/service/productos.service';
import { global } from 'src/app/service/global';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['../../admin/admin.component.css']
})
export class ProductosComponent implements OnInit {

  public productos!: Producto[];
  public url: string;

  constructor(
    private _productosService: ProductosService
  ) { 
    this.url = global.url;
  }

  ngOnInit(): void {
    this._productosService.getProductos().subscribe(
      response =>{
        // console.log(response.productos);
        this.productos = response.productos;
      },
      error =>{
        console.log(error);
      }
    )
  }

}
