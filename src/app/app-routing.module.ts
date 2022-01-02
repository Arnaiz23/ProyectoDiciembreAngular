import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaloncestoComponent } from './components/baloncesto/baloncesto.component';
import { CarritoComponent } from './components/carrito/carrito.component';


import { ErrorComponent } from "./components/error/error.component";
import { FutbolComponent } from './components/futbol/futbol.component';
import { HomeComponent } from "./components/home/home.component";
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { RunningComponent } from './components/running/running.component';
import { VoleibolComponent } from './components/voleibol/voleibol.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent,
    children: [
      {path: '', component: FutbolComponent},
      {path: 'futbol', component: FutbolComponent},
      {path: 'baloncesto', component: BaloncestoComponent},
      {path: 'voleibol', component: VoleibolComponent},
      {path: 'running', component: RunningComponent}
    ]
  },
  {path: 'home', component: HomeComponent},
  {path: 'preguntas', component: PreguntasComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

