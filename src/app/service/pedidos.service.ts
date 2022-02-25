import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  public url !: string;

  constructor(
    private _http: HttpClient
  ) { 
    this.url = global.url;
  }

  getPedidos(id:string):Observable<any>{
    return this._http.get(this.url+"getPedidos/"+id);
  }

  getPedido(id:string):Observable<any>{
    return this._http.get(this.url+"getPedido/"+id);
  }

  newPedido(body:string):Observable<any>{
    let body2 = JSON.stringify(body);
    let headers = new HttpHeaders().set("Content-type","application/json");
    return this._http.post(this.url+"newPedido",body2,{headers:headers});
  }

  updatePedido(id: string, body:string):Observable<any>{
    let body2 = JSON.stringify(body);
    let headers = new HttpHeaders().set("Content-type","application/json");
    return this._http.put(this.url+"updatePedido/"+id,body2,{headers:headers});
  }

  deletePedido(id: string):Observable<any>{
    return this._http.delete(this.url+"deletePedido/"+id);
  }
}
