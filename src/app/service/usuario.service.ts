import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { global } from './global';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuario!: string|boolean;
  public url: string;

  constructor(
    private _http: HttpClient,
    private _cookies: CookieService
  ) { 
    // this.usuario = false;
    this.url = global.url;
    this.identidad().subscribe(
      response => {
        let usuario = response.usuario;
        this.isAdmin(this.getToken()).subscribe(
          response =>{
            this.usuario = "admin";
          },
          error =>{
            this.usuario = "usuario";
          }
        )
      },
      error =>{
        console.error(error)
      }
    )
  }

  cambiarIdentidad(rol?: string){
    if(!this.usuario && rol){
      this.usuario = rol;
    }else{
      this.usuario = false;
    }
  }

  identidad():Observable<any>{
    // return this.usuario;
    // var body = JSON.stringify(this.getToken());
    var body = {
      token: this.getToken()
    };
    // var body = JSON.stringify(this.getToken());
    return this._http.post(this.url+"getUsuario",body);
  }

  comprobarUsuario(newUsuario: any):Observable<any>{
    // var newUsuario = new Usuario("","","","","","","",[]);
    /* var newUsuario = {
      usuario: usuario,
      password: password
    } */
    var body = JSON.stringify(newUsuario);
    var headers = new HttpHeaders().set("Content-type", "application/json");
    return this._http.post(this.url+"comprobar-usuario",body,{headers: headers});
  }

  setToken(token: string){
    this._cookies.set("token", token);
  }
  getToken() {
    return this._cookies.get("token");
  }
  deleteToken(){
    this._cookies.delete("token");
  }

  isAdmin(token: string):Observable<any>{
    var body = {token: token};
    return this._http.post(this.url+"admin-user", body);
  }
}
