import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/models/preguntas';
import { PreguntasService } from 'src/app/service/preguntas.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-preguntas-admin',
  templateUrl: './preguntas-admin.component.html',
  styleUrls: ['../../admin/admin.component.css']
})
export class PreguntasAdminComponent implements OnInit {

  public get currentUser() {
    return this._usuarioService.usuario;
  }

  public preguntas!: Pregunta[];

  constructor(
    private _preguntasService: PreguntasService,
    private _usuarioService: UsuarioService,
    private _router: Router
  ) { 
    if(this.currentUser != "admin") _router.navigate(["/"]);
  }

  ngOnInit(): void {
    this._preguntasService.getPreguntas().subscribe(
      response =>{
        // console.log(response.preguntas);
        this.preguntas = response.preguntas;
      },
      error =>{
        console.log(error);
      }
    )
  }

}
