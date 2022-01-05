import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['../../login/login.component.css']
})
export class InicioComponent implements OnInit {

  public newUsuario: any;
  public indentificado!: boolean;

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router
  ) { 
    // this.newUsuario = new Usuario("","","","","","","",[]);
    this.newUsuario = {usuario: "", password: ""};
    this.indentificado = true;
  }

  ngOnInit(): void {
    
  }

  comprobar(){
    // console.log(this.newUsuario)

    this._usuarioService.comprobarUsuario(this.newUsuario).subscribe(
      response =>{
        // console.log(response.token);
        this._usuarioService.setToken(response.token);
        this._usuarioService.cambiarIdentidad();
        this._router.navigate(['/']);
      },
      error =>{
        // console.log(error)
        this.indentificado = false;
      }
    )
    // Enviar los datos para comprobar

    /* this._usuarioService.cambiarIdentidad();
    this._router.navigate(['/']); */
  }

}
