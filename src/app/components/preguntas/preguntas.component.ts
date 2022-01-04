import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/models/preguntas';
import { PreguntasService } from 'src/app/service/preguntas.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  public preguntas!: Pregunta[];
  public respuesta: boolean;

  constructor(
    private _preguntasService: PreguntasService
  ) { 
    this.respuesta = false;
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

}
