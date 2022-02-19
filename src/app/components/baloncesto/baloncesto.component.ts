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

  public get currentUser() {
    return this._usuarioService.usuario;
  }

  public productos!: Producto[];
  public url: string;
  public usuario!: boolean;
  public listaMarcas!: Array<any>;

  constructor(
    private _productoServices: ProductosService,
    private _usuarioService: UsuarioService
  ) { 
    this.url = global.url;
    this.listaMarcas = [];
  }

  ngOnInit(): void {
    this._productoServices.getDeporte("baloncesto").subscribe(
      response =>{
        // console.log(response.productos)
        this.productos = response.productos;
        this.recorrerMarcas();
        this.recorrerTipos();
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

  async recorrerMarcas(){
    for await (let data of this.productos){
      if(!this.listaMarcas.includes(data.marca)){
        this.listaMarcas.push(data.marca)
      }
      // console.log(data.marca);
    }

    // console.log(this.listaMarcas);
    localStorage.setItem("marcas",JSON.stringify(this.listaMarcas));
  }

  async recorrerTipos(){
    let tipos: any = [];
    for await (let data of this.productos){
      if(!tipos.includes(data.tipo)){
        tipos.push(data.tipo)
      }
    }
    localStorage.setItem("tipos",JSON.stringify(tipos));
  }
  
}
