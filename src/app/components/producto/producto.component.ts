import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/service/productos.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { global } from 'src/app/service/global';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public id!: string;
  public producto!: Producto;
  public url: string;

  constructor(
    private _productoService: ProductosService,
    private _route: ActivatedRoute
  ) { 
    this.url = global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      this.id = params['id'];
    });
    this._productoService.getProducto(this.id).subscribe(
      response =>{
        this.producto = response.producto;
      },
      error =>{
        console.log(error);
      }
    )
  }

}
