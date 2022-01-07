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

  public carrito: Producto[];
  public usuario: boolean;
  public precio: number;

  constructor(
    private _productoService: ProductosService,
    private _usuarioService: UsuarioService,
    private _router: Router
  ) { 
    this.usuario = _usuarioService.usuario;
    this.precio = _productoService.devolverPrecio();
    this.carrito = [];
  }

  ngOnInit(): void {
    /* let producto =  new Producto("","","comida","","","","","","","",null);
    this._productoService.addCarrito("add", producto); */
    this.carrito = this._productoService.devolverCarrito();
  }

  finalizarCompra(carrito: Producto[]){
    if(carrito.length != 0){
      console.log(carrito);
      // Una vez realizada compra del todo, eliminar carrito
      localStorage.removeItem("carrito");
      this._router.navigate(['/']);
    }
  }

}
