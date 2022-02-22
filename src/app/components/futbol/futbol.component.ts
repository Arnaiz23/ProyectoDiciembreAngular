import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Usuario } from 'src/app/models/usuario';
import { global } from 'src/app/service/global';
import { PedidosService } from 'src/app/service/pedidos.service';
import { ProductosService } from 'src/app/service/productos.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-futbol',
  templateUrl: './futbol.component.html',
  styleUrls: ['./futbol.component.css']
})
export class FutbolComponent implements OnInit {

  public get currentUser() {
    return this._usuarioService.usuario;
  }

  public productos!: Producto[];
  public url: string;
  public listaMarcas!: Array<any>;
  public usuario!: Usuario;

  constructor(
    private _productoServices: ProductosService,private _usuarioService: UsuarioService,
    private _pedidosService: PedidosService
  ) { 
    this.url = global.url;
    this.listaMarcas = [];
  }

  ngOnInit(): void {
    this._productoServices.getDeporte("futbol").subscribe(
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
    this.identidad();
  }

  identidad(){
    this._usuarioService.identidad().subscribe(
      response =>{
        // console.log(response.usuario[0])
        this.usuario = response.usuario[0];
      },
      err =>{
        console.log(err.error)
      }
    )
  }

  ordenar(opcion: string){
    console.log("Hola");
    this._productoServices.ordenarProductos(opcion,"futbol").subscribe(
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

    // !Pedidos

    let pedidos:any = [];
    if(localStorage.getItem("carrito2") != null){
      this._pedidosService.getPedido(JSON.parse(localStorage.getItem("carrito2") || "")).subscribe(
        response =>{
          // pedidos.push(response.pedidos);
          // console.log(response.pedidos[0].pedido);
          this._productoServices.addCarrito(producto, parseInt(cantidad.value),this.usuario._id,response.pedidos[0].pedido).subscribe(
            response =>{
              // console.log(response);
              if(localStorage.getItem("carrito2") == null || localStorage.getItem("carrito2") == "") localStorage.setItem("carrito2",JSON.stringify(response.message._id));
            },
            error =>{
              console.log(error);
            }
          );
        },
        error =>{
          console.log(error);
        }
      )
    }else{
      this._productoServices.addCarrito(producto, parseInt(cantidad.value),this.usuario._id).subscribe(
        response =>{
          // console.log(response.message);
          if(localStorage.getItem("carrito2") == null || localStorage.getItem("carrito2") == "") localStorage.setItem("carrito2",JSON.stringify(response.message._id));
        },
        error =>{
          console.log(error);
        }
      );
    }
    
    
    // this._productoServices.addCarrito("add",producto, parseInt(cantidad.value));
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
    let marcas: any = [];
    for await (let data of this.productos){
      if(!marcas.includes(data.marca)){
        marcas.push(data.marca)
      }
    }
    localStorage.setItem("marcas",JSON.stringify(marcas));
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
