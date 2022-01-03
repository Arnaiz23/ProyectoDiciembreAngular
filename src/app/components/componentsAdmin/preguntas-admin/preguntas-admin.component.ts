import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/models/preguntas';
import { PreguntasService } from 'src/app/service/preguntas.service';

@Component({
  selector: 'app-preguntas-admin',
  templateUrl: './preguntas-admin.component.html',
  styleUrls: ['../../admin/admin.component.css']
})
export class PreguntasAdminComponent implements OnInit {

  public preguntas!: Pregunta[];

  constructor(
    private _preguntasService: PreguntasService
  ) { }

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
