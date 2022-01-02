import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { global } from 'src/app/service/global';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-futbol',
  templateUrl: './futbol.component.html',
  styleUrls: ['./futbol.component.css']
})
export class FutbolComponent implements OnInit {

  public productos!: Producto[];
  public url: string;

  constructor(
    private _productoServices: ProductosService
  ) { 
    this.url = global.url;
  }

  ngOnInit(): void {
    this._productoServices.getDeporte("futbol").subscribe(
      response =>{
        // console.log(response.productos)
        this.productos = response.productos;
      },
      error =>{
        console.log(error);
      }
    )
  }

}
