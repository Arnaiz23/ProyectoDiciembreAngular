import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public url: string;
  public precio!: number;

  constructor(
    private _http: HttpClient
  ) { 
    this.url = global.url;
    this.precio = 0;
  }

  getDeporte(deporte: string):Observable<any>{
    return this._http.get(this.url+"productos/"+deporte);
  }

  getProducto(id: string):Observable<any>{
    return this._http.get(this.url+"producto/"+id);
  }

  getProductos():Observable<any>{
    return this._http.get(this.url+"productos");
  }

  cambiarPrecio(precio: number){
    this.precio += precio;
    return this.precio;
  }

  searchProducto(search: string):Observable<any>{
    return this._http.get(this.url+"search-productos/"+search);
  }

  listaMarca(lista?: Array<any>){
    return lista;
  }

  ordenarProductos(opcion: string, deporte: string):Observable<any>{
    return this._http.get(this.url+"order-productos/"+opcion+"/"+deporte);
  }

}
