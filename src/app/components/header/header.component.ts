import { Component, OnInit } from '@angular/core';
import { global } from 'src/app/service/global';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public mostrar!: boolean;
  public usuario!: boolean;
  public cerrarSesion: boolean;

  constructor(
    private _usuarioService: UsuarioService
  ) { 
    this.cerrarSesion = true;
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
    this.mostrar = false;
  }

  // Antes de hacer lo del token, usaba el doCheck y cambiaba el "iniciar sesion" por mi cuenta al instante. Probarlo
  ngDoCheck(){
    if(this._usuarioService.getToken() != "" && this._usuarioService.usuario){
      this.usuario = true;
    }else{
      this.usuario = false;
    }
  }


  menu(){
    if(this.mostrar){
      this.mostrar = false;
    }else{
      this.mostrar = true;
    }
  }

  logOut(){
    this._usuarioService.deleteToken();
    alert("Has cerrado sesion");
  }

}
