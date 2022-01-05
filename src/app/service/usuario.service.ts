import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuario!: boolean;

  constructor() { 
    this.usuario = false;
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
}
