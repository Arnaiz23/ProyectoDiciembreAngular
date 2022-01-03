import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { BaloncestoComponent } from './components/baloncesto/baloncesto.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { InicioComponent } from './components/componentesLogin/inicio/inicio.component';
import { RegistroComponent } from './components/componentesLogin/registro/registro.component';
import { PreguntasAdminComponent } from './components/componentsAdmin/preguntas-admin/preguntas-admin.component';
import { ProductosComponent } from './components/componentsAdmin/productos/productos.component';


import { ErrorComponent } from "./components/error/error.component";
import { FutbolComponent } from './components/futbol/futbol.component';
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from './components/login/login.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { ProductoComponent } from './components/producto/producto.component';
import { RunningComponent } from './components/running/running.component';
import { VoleibolComponent } from './components/voleibol/voleibol.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent,
    children: [
      // {path: '', component: FutbolComponent},
      {path: '', redirectTo: '/futbol', pathMatch: 'full'},
      {path: 'futbol', component: FutbolComponent},
      {path: 'baloncesto', component: BaloncestoComponent},
      {path: 'voleibol', component: VoleibolComponent},
      {path: 'running', component: RunningComponent}
    ]
  },
  {path: 'home', component: HomeComponent},
  {path: 'preguntas', component: PreguntasComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'producto/:id', component: ProductoComponent},
  {path: 'admin', component: AdminComponent,
    children: [
      {path: '', redirectTo: '/admin/productos', pathMatch: 'full'},
      {path: 'productos', component: ProductosComponent},
      {path: 'preguntas', component: PreguntasAdminComponent}
    ]
  },
  {path: 'login', component: LoginComponent,
    children: [
      {path: '', redirectTo: '/login/registro', pathMatch: 'full'},
      {path: 'inicio', component: InicioComponent},
      {path: 'registro', component: RegistroComponent}
    ]
  },
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

