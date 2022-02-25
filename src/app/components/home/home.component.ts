import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/models/pedido';
import { global } from 'src/app/service/global';
import { PedidosService } from 'src/app/service/pedidos.service';
import { ProductosService } from 'src/app/service/productos.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public get currentUser() {
    return this._usuarioService.usuario;
  }

  /* public get getPrecio() {
    // return this._productoService.marcas;
    return this.devolverPrecio();
  } */

  public precio: number = 0;
  public searchString!: string;
  public usuario!: boolean;
  public listaMarcas!: any ;
  public listaTipos!: any ;
  private pedidos !: Pedido[];

  constructor(
    private _productoService: ProductosService,
    private _router: Router,
    private _usuarioService: UsuarioService,
    private _pedidoService: PedidosService
  ) { 
    // this.precio = _productoService.cambiarPrecio(20);

    // this.precio = _productoService.devolverPrecio();
  }

  ngOnInit(): void {
    // this.precio = this._productoService.devolverPrecio();
    if(localStorage.getItem("carrito2") != null && localStorage.getItem("carrito2") != ""){
      this.devolverPrecio();
    }
    this.recogerMarcas();
  }

  ngDoCheck(){
    // this.precio = this._productoService.devolverPrecio();
    this.listaMarcas = this.recogerMarcas();
    this.listaTipos = this.recogerTipos();
  }

  search(){
    if(this.searchString == ""){
      this._router.navigate(['/']);
    }else{
      this._router.navigate(['/search', this.searchString]); 
    }
  }

  recogerMarcas(){
    if (localStorage.getItem("marcas") != null) {
      return JSON.parse(localStorage.getItem("marcas") || '{}');
    }
  }
  
  recogerTipos(){
    if (localStorage.getItem("tipos") != null) {
      return JSON.parse(localStorage.getItem("tipos") || '{}');
    }
  }

  devolverPrecio(){
    this._pedidoService.getPedido(JSON.parse(localStorage.getItem("carrito2") || "")).subscribe(
      response =>{
        this.pedidos = response.pedidos[0].pedido;
        this.pedidos.forEach(pedido =>{
          // console.log(pedido.cantidad);
          // console.log(typeof pedido.cantidad);
          this.precio += pedido.precio * parseInt(pedido.cantidad);
        })
        // console.log(this.precio);
        return this.precio;
      },
      error =>{
        console.log(error);
      }
    )
  }

}
