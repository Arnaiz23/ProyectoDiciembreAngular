import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['../../login/login.component.css']
})
export class RegistroComponent implements OnInit {

  public newUsuario: Usuario;

  constructor() { 
    this.newUsuario = new Usuario("","","","","","","",[]);
  }

  ngOnInit(): void {
  }

  enviar(){
    console.log(this.newUsuario)
  }

}
