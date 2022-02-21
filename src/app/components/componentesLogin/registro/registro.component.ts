import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['../../login/login.component.css']
})
export class RegistroComponent implements OnInit {

  public newUsuario: Usuario;

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router  
  ) { 
    this.newUsuario = new Usuario("","","","","","","",[]);
  }

  ngOnInit(): void {
  }

  enviar(){
    this._usuarioService.registerUser(this.newUsuario).subscribe(
      response =>{
        // console.log(response);
        this._router.navigate(["/login/inicio"]);
      },
      error =>{
        console.log(error);
      }
    )
  }

}
