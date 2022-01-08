import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { global } from 'src/app/service/global';
import { ProductosService } from 'src/app/service/productos.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  public carrito: Array<any>;
  public usuario!: boolean;
  public precio: number;
  public url: string;

  constructor(
    private _productoService: ProductosService,
    private _usuarioService: UsuarioService,
    private _router: Router
  ) { 
    // this.usuario = _usuarioService.usuario;
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
    this.precio = _productoService.devolverPrecio();
    this.carrito = [];
    this.url = global.url;
  }

  ngOnInit(): void {
    /* let producto =  new Producto("","","comida","","","","","","","",null);
    this._productoService.addCarrito("add", producto); */
    this.carrito = this._productoService.devolverCarrito();
    
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
    let index = this.carrito.indexOf(producto);
    this.carrito.splice(index,1);
    localStorage.setItem("carrito", JSON.stringify(this.carrito));
  }

}
