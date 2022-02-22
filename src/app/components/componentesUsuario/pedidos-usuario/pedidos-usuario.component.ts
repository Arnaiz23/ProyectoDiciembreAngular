import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/models/pedido';
import { Usuario } from 'src/app/models/usuario';
import { PedidosService } from 'src/app/service/pedidos.service';
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

  public usuario!: Usuario;
  public pedidos !: Pedido[];

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router,
    private _pedidoService: PedidosService
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
        this.getPedidos();
      },
      err =>{
        console.log(err.error)
      }
    )
  }

  getPedidos(){
    let id = this.usuario._id;
    this._pedidoService.getPedidos(id).subscribe(
      response => {
        // console.log(response);
        this.pedidos = response.pedidos;
        console.log(this.pedidos);
      },
      error => {
        console.log(error);
      }
    );
  }

}
