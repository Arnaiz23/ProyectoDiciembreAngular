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

  constructor(
    private _preguntasService: PreguntasService
  ) { }

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

}
