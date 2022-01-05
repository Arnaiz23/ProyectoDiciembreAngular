import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  //MUY IMPORTANTE PARA HTTP
import { MomentModule } from "angular2-moment"; //Pipes de fechas
import { AngularFileUploaderModule } from 'angular-file-uploader'; //Modulo para subir imagenes
import { CookieService } from "ngx-cookie-service";

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
import { ProductoComponent } from './components/producto/producto.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProductosComponent } from './components/componentsAdmin/productos/productos.component';
import { PreguntasAdminComponent } from './components/componentsAdmin/preguntas-admin/preguntas-admin.component';
import { LoginComponent } from './components/login/login.component';
import { SliderComponent } from './components/slider/slider.component';
import { InicioComponent } from './components/componentesLogin/inicio/inicio.component';
import { RegistroComponent } from './components/componentesLogin/registro/registro.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { PedidosUsuarioComponent } from './components/componentesUsuario/pedidos-usuario/pedidos-usuario.component';
import { AdministrarUsuarioComponent } from './components/componentesUsuario/administrar-usuario/administrar-usuario.component';
import { DireccionesUsuarioComponent } from './components/componentesUsuario/direcciones-usuario/direcciones-usuario.component';
import { TarjetasUsuarioComponent } from './components/componentesUsuario/tarjetas-usuario/tarjetas-usuario.component';
import { SearchComponent } from './components/search/search.component';

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
    RunningComponent,
    ProductoComponent,
    AdminComponent,
    ProductosComponent,
    PreguntasAdminComponent,
    LoginComponent,
    SliderComponent,
    InicioComponent,
    RegistroComponent,
    UsuarioComponent,
    PedidosUsuarioComponent,
    AdministrarUsuarioComponent,
    DireccionesUsuarioComponent,
    TarjetasUsuarioComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MomentModule,
    AngularFileUploaderModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
