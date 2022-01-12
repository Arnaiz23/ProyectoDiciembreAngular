import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { global } from 'src/app/service/global';
import { ProductosService } from 'src/app/service/productos.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-baloncesto',
  templateUrl: '../futbol/futbol.component.html',
  styleUrls: ['../futbol/futbol.component.css']
})
export class BaloncestoComponent implements OnInit {

  public currentUser!: any;

  public productos!: Producto[];
  public url: string;
  public usuario!: boolean;

  constructor(
    private _productoServices: ProductosService,
    private _usuarioService: UsuarioService
  ) { 
    this.url = global.url;
    if(_usuarioService.getToken() != ""){
      _usuarioService.identidad().subscribe(
        response =>{
          this.usuario = true;
        },
        err =>{
          console.log(err.error);
        }
      )
    }
  }

  ngOnInit(): void {
    this._productoServices.getDeporte("baloncesto").subscribe(
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
    this._productoServices.ordenarProductos(opcion,"baloncesto").subscribe(
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
