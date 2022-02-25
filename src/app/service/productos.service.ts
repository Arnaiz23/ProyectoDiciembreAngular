import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { Producto } from '../models/producto';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public url: string;
  public precio!: number;
  public carrito: Array<any>;
  public marcas!: Array<any>;

  constructor(
    private _http: HttpClient
  ) {
    this.url = global.url;
    this.precio = 0;
    // console.log(JSON.parse(localStorage.getItem("carrito")))
    if (localStorage.getItem("carrito") == null) {
      this.carrito = [];
    } else {
      this.carrito = JSON.parse(localStorage.getItem("carrito") || '{}');
    }
    // this.carrito = [];
  }

  getDeporte(deporte: string): Observable<any> {
    return this._http.get(this.url + "productos/" + deporte);
  }

  getProducto(id: string): Observable<any> {
    return this._http.get(this.url + "producto/" + id);
  }

  getProductos(): Observable<any> {
    return this._http.get(this.url + "productos");
  }

  cambiarPrecio(precio: number) {
    this.precio += precio;
    return this.precio;
  }

  devolverPrecio() {
    let precio = 0;
    let carrito = this.devolverCarrito();
    if (!carrito || carrito.length == 0) {
      precio = 0;
    } else {
      carrito.forEach(producto => {
        // console.log(producto)
        precio += producto.precio * parseInt(producto.cantidad);
        // precio += producto.precio;
      });
    }
    return precio;
  }

  searchProducto(search: string): Observable<any> {
    return this._http.get(this.url + "search-productos/" + search);
  }

  listaMarca(lista?: Array<any>) {
    return lista;
  }

  ordenarProductos(opcion: string, deporte: string): Observable<any> {
    return this._http.get(this.url + "order-productos/" + opcion + "/" + deporte);
  }

  // addCarrito(opcion: string, producto?: any, cantidad?: number):Observable<any> {
  addCarrito(producto: any, cantidad: number, id: string, pedidos?: Pedido[]):Observable<any> {
    let newproducto = new Pedido(producto.imagen,producto.nombre,cantidad.toString(),producto.precio);

    if(localStorage.getItem("carrito2") == null || localStorage.getItem("carrito2") == ""){
      // * Añadir carrito
      // ! Carrito no existe
      let nuevoPedido = {
        "pedido" : newproducto,
        "id_usuario" : id
      }
      let body = JSON.stringify(nuevoPedido);
      let headers = new HttpHeaders().set("Content-type","application/json");
      return this._http.post(this.url+"newPedido",body,{headers:headers});
    }else{
      // * Update el carrito
      // ! Carrito o pedido si existe ya
      let pedidosTotales = pedidos || [];
      pedidosTotales.push(newproducto);
      let nuevoPedido = {
        "pedido" : pedidosTotales,
        "id_usuario" : id
      }
      let body = JSON.stringify(nuevoPedido);
      let idPedido = JSON.parse(localStorage.getItem("carrito2")|| "");
      let headers = new HttpHeaders().set("Content-type","application/json");
      return this._http.put(this.url+"updatePedido/"+idPedido,body,{headers:headers});
    }
  }

  devolverCarrito() {
    if (localStorage.getItem("carrito") == null) {
      this.carrito = [];
    }
    return this.carrito;
  }

}
