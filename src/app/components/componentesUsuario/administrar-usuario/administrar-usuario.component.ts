import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-administrar-usuario',
  templateUrl: './administrar-usuario.component.html',
  styleUrls: ['../../usuario/usuario.component.css']
})
export class AdministrarUsuarioComponent implements OnInit {

  public usuario!: Usuario;

  constructor(
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.identidad();
  }

  identidad(){
    this._usuarioService.identidad().subscribe(
      response =>{
        // console.log(response.usuario)
        this.usuario = response.usuario[0];
      },
      err =>{
        console.log(err.error)
      }
    )
  }

}
