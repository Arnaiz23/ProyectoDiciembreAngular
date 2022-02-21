import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pregunta } from 'src/app/models/preguntas';
import { PreguntasService } from 'src/app/service/preguntas.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import swal from 'sweetalert'; // * Modulo alertas

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  public get currentUser() {
    return this._usuarioService.usuario;
  }

  public preguntas!: Pregunta[];
  public respuesta: boolean;
  public usuario!: string|boolean;

  constructor(
    private _preguntasService: PreguntasService,
    private _usuarioService: UsuarioService
  ) { 
    this.respuesta = false;
    this.usuario = this.currentUser;
  }

  ngOnInit(): void {
    this._preguntasService.getPreguntas().subscribe(
      response =>{
        // console.log(response.preguntas)
        this.preguntas = response.preguntas;
      },
      error =>{
        console.log(error);
      }
    )
  }

  verRespuesta(event: any){
    let elemento = event.target.nextElementSibling;
    if(this.respuesta){
      this.respuesta = false;
      elemento.classList.remove("ver_respuesta");
    }else{
      this.respuesta = true;
      elemento.classList.add("ver_respuesta");
    }
  }

  enviarPregunta(){
    let pregunta = <HTMLInputElement>document.querySelector("#preguntaUsuario");
    let correo = <HTMLInputElement>document.querySelector("#correoPregunta");
    

    if(!this.usuario){
      if(pregunta.value == "" || correo.value == ""){
        pregunta.style.border = "2px solid red";
        correo.style.border = "2px solid red";
        alert("Debe rellenar el campo de la pregunta y/o el correo");
      }else{
        pregunta.style.border = "2px solid green";
        correo.style.border = "2px solid green";
        // alert("Pregunta enviada correctamente, en breves nos pondremos en contacto");
        swal(
          "Pregunta enviada!!",
          "Nos pondremos en contacto en breves",
          "success"
        );
  
        pregunta.style.border = "1px solid #000";
        pregunta.value = "";
        correo.style.border = "1px solid #000";
        correo.value = "";
      }
    }else{
      if(pregunta.value == ""){
        pregunta.style.border = "2px solid red";
        alert("Debe rellenar el campo de la pregunta");
      }else{
        pregunta.style.border = "2px solid green";
        // alert("Pregunta enviada correctamente, en breves nos pondremos en contacto");
        swal(
          "Pregunta enviada!!",
          "Nos pondremos en contacto en breves",
          "success"
        );
  
        pregunta.style.border = "1px solid #000";
        pregunta.value = "";
      }
    }
  }

}
