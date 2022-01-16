import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-tarjetas-usuario',
  templateUrl: './tarjetas-usuario.component.html',
  styleUrls: ['../../usuario/usuario.component.css']
})
export class TarjetasUsuarioComponent implements OnInit {

  public get currentUser() {
    return this._usuarioService.usuario;
  }

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router
  ) { 
    if(this.currentUser == undefined) _router.navigate(["/"]);
  }

  ngOnInit(): void {
  }

}
