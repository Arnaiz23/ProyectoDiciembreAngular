import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public url: string;
  public precio!: number;
  public carrito: Producto[];

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
    if(!carrito || carrito.length == 0){
      precio = 0;
    }else{
      carrito.forEach(producto => {
        // precio += parseFloat(producto.precio) * parseInt(producto.cantidad);
        precio += producto.precio;
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

  addCarrito(opcion: string, producto?: Producto) {
    if (opcion != "add") {
      this.carrito = [];
    } else {
      if (producto) {
        this.carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(this.carrito));
      }
    }
  }

  devolverCarrito() {
    if(localStorage.getItem("carrito") == null){
      this.carrito = [];
    }
    return this.carrito;
  }

}
