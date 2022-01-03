import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  
  public url: string;

  constructor(
    private _http: HttpClient
  ) { 
    this.url = global.url;
  }

  getPreguntas():Observable<any>{
    return this._http.get(this.url+"preguntas");
  }
}
