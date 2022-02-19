import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { global } from 'src/app/service/global';
import { ProductosService } from 'src/app/service/productos.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public get currentUser() {
    return this._usuarioService.usuario;
  }

  /* public get getMarcas() {
    return this._productoService.marcas;
  } */

  public precio: number;
  public searchString!: string;
  public usuario!: boolean;
  public listaMarcas!: any ;
  public listaTipos!: any ;

  constructor(
    private _productoService: ProductosService,
    private _router: Router,
    private _usuarioService: UsuarioService
  ) { 
    // this.precio = _productoService.cambiarPrecio(20);
    this.precio = _productoService.devolverPrecio();
  }

  ngOnInit(): void {
    this.precio = this._productoService.devolverPrecio();
    this.recogerMarcas();
  }

  ngDoCheck(){
    this.precio = this._productoService.devolverPrecio();
    this.listaMarcas = this.recogerMarcas();
    this.listaTipos = this.recogerTipos();
  }

  search(){
    if(this.searchString == ""){
      this._router.navigate(['/']);
    }else{
      this._router.navigate(['/search', this.searchString]); 
    }
  }

  recogerMarcas(){
    if (localStorage.getItem("marcas") != null) {
      return JSON.parse(localStorage.getItem("marcas") || '{}');
    }
  }
  
  recogerTipos(){
    if (localStorage.getItem("tipos") != null) {
      return JSON.parse(localStorage.getItem("tipos") || '{}');
    }
  }

}
