import { Component, OnInit } from '@angular/core';
import { global } from 'src/app/service/global';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public mostrar!: boolean;
  public usuario!: boolean;

  constructor(
    private _usuarioService: UsuarioService
  ) { 
    this.usuario = _usuarioService.usuario;
  }

  ngOnInit(): void {
    this.mostrar = false;
  }

  ngDoCheck(){
    this.usuario = this._usuarioService.usuario;
  }

  menu(){
    if(this.mostrar){
      this.mostrar = false;
    }else{
      this.mostrar = true;
    }
  }

}
