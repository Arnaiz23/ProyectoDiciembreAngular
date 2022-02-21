import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-direcciones-usuario',
  templateUrl: './direcciones-usuario.component.html',
  styleUrls: ['../../usuario/usuario.component.css']
})
export class DireccionesUsuarioComponent implements OnInit {

  public get currentUser() {
    return this._usuarioService.usuario;
  }

  public usuario!: Usuario;
  public direcciones!: Array<any>;

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router
  ) { 
    if(this.currentUser == undefined) _router.navigate(["/"]);
  }

  ngOnInit(): void {
    this.identidad();
  }

  identidad(){
    this._usuarioService.identidad().subscribe(
      response =>{
        // console.log(response.usuario[0])
        this.usuario = response.usuario[0];
        this.direcciones = this.usuario.direcciones;
        console.log(this.direcciones);
      },
      err =>{
        console.log(err.error)
      }
    )
  }

}
