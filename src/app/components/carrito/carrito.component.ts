import { Component, OnInit } from '@angular/core';
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

  public carrito!: Producto[];
  public usuario: boolean;
  public precio: number;

  constructor(
    private _productoService: ProductosService,
    private _usuarioService: UsuarioService
  ) { 
    this.usuario = _usuarioService.usuario;
    this.precio = _productoService.precio;
  }

  ngOnInit(): void {
  }

}
