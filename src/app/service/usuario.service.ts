import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuario!: boolean;
  public url: string;

  constructor(
    private _http: HttpClient
  ) { 
    this.usuario = false;
    this.url = global.url;
  }

  cambiarIdentidad(){
    if(this.usuario){
      this.usuario = false;
      console.log(this.usuario);
    }else{
      this.usuario = true;
      console.log(this.usuario)
    }
  }

  identidad(){
    return this.usuario;
  }

  comprobarUsuario(usuario: string, password: string):Observable<any>{
    // var newUsuario = new Usuario("","","","","","","",[]);
    var newUsuario = {
      usuario: usuario,
      password: password
    }
    var body = JSON.stringify(newUsuario);
    var headers = new HttpHeaders().set("Content-type", "application/json");
    return this._http.post(this.url+"comprobar-usuario",body,{headers: headers});
  }
}
