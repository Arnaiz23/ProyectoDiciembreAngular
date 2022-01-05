import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/service/productos.service';
import { global } from 'src/app/service/global';

@Component({
  selector: 'app-voleibol',
  templateUrl: '../futbol/futbol.component.html',
  styleUrls: ['../futbol/futbol.component.css']
})
export class VoleibolComponent implements OnInit {

  public productos!: Producto[];
  public url: string;
  public usuario: boolean;

  constructor(
    private _productoServices: ProductosService
  ) { 
    this.url = global.url;
    this.usuario = false;
  }

  ngOnInit(): void {
    this._productoServices.getDeporte("voleibol").subscribe(
      response =>{
        // console.log(response.productos)
        this.productos = response.productos;
      },
      error =>{
        console.log(error);
      }
    )
  }

  ordenar(opcion: string){
    this._productoServices.ordenarProductos(opcion,"voleibol").subscribe(
      response =>{
        // console.log(response.productos);
        this.productos = response.productos;
      },
      error =>{
        console.log(error)
      }
    )
  }

}
