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

  public newUsuario: Usuario;

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router
  ) { 
    this.newUsuario = new Usuario("","","","","","","",[]);
  }

  ngOnInit(): void {
  }

  comprobar(){
    console.log(this.newUsuario)

    // Enviar los datos para comprobar

    /* this._usuarioService.cambiarIdentidad();
    this._router.navigate(['/']); */
  }

}
