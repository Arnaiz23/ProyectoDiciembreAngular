import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-pedidos-usuario',
  templateUrl: './pedidos-usuario.component.html',
  styleUrls: ['../../usuario/usuario.component.css']
})
export class PedidosUsuarioComponent implements OnInit {

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
