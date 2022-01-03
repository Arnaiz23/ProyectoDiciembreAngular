import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['../../login/login.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  iniciar(){
    this._usuarioService.cambiarIdentidad();
    this._router.navigate(['/']);
  }

}
