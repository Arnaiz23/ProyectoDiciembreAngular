import { Component, OnInit, Output } from '@angular/core';
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

  public precio: number;
  public searchString!: string;
  public usuario!: boolean;

  constructor(
    private _productoService: ProductosService,
    private _router: Router,
    private _usuarioService: UsuarioService
  ) { 
    // this.precio = _productoService.cambiarPrecio(20);
    this.precio = _productoService.devolverPrecio();
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
    this.precio = this._productoService.devolverPrecio();
  }

  ngDoCheck(){
    this.precio = this._productoService.devolverPrecio();
    if(this._usuarioService.getToken() != "" && this._usuarioService.usuario){
        this.usuario = true;
    }else{
      this.usuario = false;
    }
  }

  search(){
    if(this.searchString == ""){
      this._router.navigate(['/']);
    }else{
      this._router.navigate(['/search', this.searchString]); 
    }
  }

}
