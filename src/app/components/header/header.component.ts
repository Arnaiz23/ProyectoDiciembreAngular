import { Component, OnInit } from '@angular/core';
import { global } from 'src/app/service/global';
import { PedidosService } from 'src/app/service/pedidos.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public get currentUser() {
    return this._usuarioService.usuario;
  }
  
  public mostrar!: boolean;
  public usuario!: boolean;
  public cerrarSesion: boolean;

  constructor(
    private _usuarioService: UsuarioService,
    private _pedidoService : PedidosService
  ) { 
    this.cerrarSesion = true;
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
  }

  ngOnInit(): void {
    this.mostrar = false;
  }


  menu(){
    if(this.mostrar){
      this.mostrar = false;
    }else{
      this.mostrar = true;
    }
  }

  logOut(){

    if(localStorage.getItem("carrito2") != null && localStorage.getItem("carrito2") != ""){
      const pedidoId = JSON.parse(localStorage.getItem("carrito2") || "");
      this._pedidoService.deletePedido(pedidoId).subscribe(
        response =>{
          // console.log(response);
          localStorage.removeItem("carrito2");
        },
        error =>{
          console.log(error);
        }
      )
    }

    this._usuarioService.deleteToken();
    this._usuarioService.cambiarIdentidad();
    // alert("Has cerrado sesion");
  }

}
