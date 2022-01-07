import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/service/productos.service';
import { global } from 'src/app/service/global';

@Component({
  selector: 'app-running',
  templateUrl: '../futbol/futbol.component.html',
  styleUrls: ['../futbol/futbol.component.css']
})
export class RunningComponent implements OnInit {

  public productos!: Producto[];
  public url: string;

  constructor(
    private _productoServices: ProductosService
  ) { 
    this.url = global.url;
  }

  ngOnInit(): void {
    this._productoServices.getDeporte("running").subscribe(
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
    this._productoServices.ordenarProductos(opcion,"running").subscribe(
      response =>{
        // console.log(response.productos);
        this.productos = response.productos;
      },
      error =>{
        console.log(error)
      }
    )
  }

  addProducto(producto: Producto, event: any){
    // console.log(producto);
    // let cantidad = event.target.parentElement.previousElementSibling.children[1].value;
    let cantidad = (<HTMLInputElement>document.getElementById("cantidad"+producto._id));
    // Mirar donde pulsa, si pulsas en el div, es undefined
    this._productoServices.addCarrito("add",producto, parseInt(cantidad.value));
  }

  addCantidad(event: any){
    event.target.nextElementSibling.value++;
  }

  removeCantidad(event: any){
    if(event.target.previousElementSibling.value <= 1){
      event.target.previousElementSibling.value = 1;
    }else{
      event.target.previousElementSibling.value--;
    }
  }

}
