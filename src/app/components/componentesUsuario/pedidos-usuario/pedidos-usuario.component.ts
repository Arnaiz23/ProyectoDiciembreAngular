import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido, Pedidos } from 'src/app/models/pedido';
import { Usuario } from 'src/app/models/usuario';
import { PedidosService } from 'src/app/service/pedidos.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { global } from 'src/app/service/global';

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
  public pedidos !: Pedidos[];
  public pedido !: Pedido[];
  public url!: string;

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router,
    private _pedidoService: PedidosService
  ) { 
    if(this.currentUser == undefined) _router.navigate(["/"]);
    this.url = global.url;
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
        if(response.pedidos.length != 0){
          this.pedidos = response.pedidos;
          // console.log(this.pedidos);
          let pedidoTotal:any = [];
          this.pedidos.forEach(data => {
            data.pedido.forEach(pedido => {
              // console.log(pedido);
              // this.pedido.push(pedido);
              pedidoTotal.push(pedido);
            })
            // this.pedido.push(data.pedido)
          })
          this.pedido = pedidoTotal;
          // console.log(this.pedido);
        }
        

        // console.log(this.pedido);
      },
      error => {
        console.log(error);
      }
    );
  }

}
