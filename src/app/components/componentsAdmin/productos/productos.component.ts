import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/service/productos.service';
import { global } from 'src/app/service/global';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['../../admin/admin.component.css']
})
export class ProductosComponent implements OnInit {

  public get currentUser() {
    return this._usuarioService.usuario;
  }

  public productos!: Producto[];
  public url: string;

  constructor(
    private _productosService: ProductosService,
    private _usuarioService: UsuarioService,
    private _router: Router
  ) { 
    this.url = global.url;
    if(this.currentUser != "admin") _router.navigate(["/"]);
  }

  ngOnInit(): void {
    this._productosService.getProductos().subscribe(
      response =>{
        // console.log(response.productos);
        this.productos = response.productos;
      },
      error =>{
        console.log(error);
      }
    )
  }

}
