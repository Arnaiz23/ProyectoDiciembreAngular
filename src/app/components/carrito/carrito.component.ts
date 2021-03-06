import { Component, OnInit } from '@angular/core';
import { ChildActivationEnd, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { Usuario } from 'src/app/models/usuario';
import { global } from 'src/app/service/global';
import { PedidosService } from 'src/app/service/pedidos.service';
import { ProductosService } from 'src/app/service/productos.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  public get currentUser() {
    return this._usuarioService.usuario;
  }

  public carrito: Array<any>;
  public usuario!: Usuario;
  public precio: number;
  public url: string;

  constructor(
    private _productoService: ProductosService,
    private _pedidoService: PedidosService,
    private _usuarioService: UsuarioService,
    private _router: Router
  ) { 
    // this.usuario = _usuarioService.usuario;
    /* if(_usuarioService.getToken() != ""){
      _usuarioService.identidad().subscribe(
        response =>{
          this.usuario = true;
        },
        err =>{
          console.log(err.error);
        }
      )
    } */
    this.precio = _productoService.devolverPrecio();
    this.carrito = [];
    this.url = global.url;
  }

  ngOnInit(): void {
    /* let producto =  new Producto("","","comida","","","","","","","",null);
    this._productoService.addCarrito("add", producto); */
    if(localStorage.getItem("carrito2") != null && localStorage.getItem("carrito2") != ""){
      this._pedidoService.getPedido(JSON.parse(localStorage.getItem("carrito2")||"")).subscribe(
        response =>{
          this.carrito = response.pedidos[0].pedido;
        },
        error =>{
          console.log(error);
        }
      );
    }
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

  ngDoCheck(){
    this.precio = this._productoService.devolverPrecio();
  }

  /* finalizarCompra(carrito: Producto[]){
    if(carrito.length != 0){
      // Formulario de compra

      console.log(carrito);
      // Una vez realizada compra del todo, eliminar carrito
      localStorage.removeItem("carrito");
      this._router.navigate(['/']);
    }
  } */

  eliminarProducto(producto: any){
    // console.log(producto);
    const pedidoId = JSON.parse(localStorage.getItem("carrito2") || "");
    let index = this.carrito.indexOf(producto);
    this.carrito.splice(index,1);
    this._pedidoService.updatePedido(pedidoId,this.carrito,this.usuario._id).subscribe(
      response =>{
        console.log(response);
      },
      error =>{
        console.log(error);
      }
    )
    // localStorage.setItem("carrito", JSON.stringify(this.carrito));
  }

}
