import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  //MUY IMPORTANTE PARA HTTP
import { MomentModule } from "angular2-moment"; //Pipes de fechas
import { AngularFileUploaderModule } from 'angular-file-uploader'; //Modulo para subir imagenes

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { FutbolComponent } from './components/futbol/futbol.component';
import { BaloncestoComponent } from './components/baloncesto/baloncesto.component';
import { VoleibolComponent } from './components/voleibol/voleibol.component';
import { RunningComponent } from './components/running/running.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ErrorComponent,
    PreguntasComponent,
    CarritoComponent,
    FutbolComponent,
    BaloncestoComponent,
    VoleibolComponent,
    RunningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MomentModule,
    AngularFileUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
