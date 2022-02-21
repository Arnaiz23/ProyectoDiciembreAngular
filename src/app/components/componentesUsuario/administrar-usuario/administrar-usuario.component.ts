import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import swal from "sweetalert";

@Component({
  selector: 'app-administrar-usuario',
  templateUrl: './administrar-usuario.component.html',
  styleUrls: ['../../usuario/usuario.component.css']
})
export class AdministrarUsuarioComponent implements OnInit {

  public get currentUser() {
    return this._usuarioService.usuario;
  }

  public usuario!: Usuario;
  public updateUser!: Usuario;

  constructor(
    private _usuarioService: UsuarioService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    if(this.currentUser == undefined) _router.navigate(["/"]);
  }

  ngOnInit(): void {
    this.identidad();
  }

  identidad(){
    this._usuarioService.identidad().subscribe(
      response =>{
        // console.log(response.usuario[0])
        this.usuario = response.usuario[0];
        this.updateUser = new Usuario(this.usuario._id,this.usuario.usuario,this.usuario.password,this.usuario.tipo,this.usuario.nombre,this.usuario.apellidos,this.usuario.correo,[]);
      },
      err =>{
        console.log(err.error)
      }
    )
  }

  actualizarCuenta(){
    this._usuarioService.updateUser(this.usuario._id,this.updateUser).subscribe(
      response =>{
        // console.log(response);
        // *Alerta
        // alert("Usuario actualizado correctamente")
        swal(
          "Cuenta actualizada!!",
          "Tus datos han sido actualizados",
          "success"
        );
        this._router.navigate(["/usuario/administrar"]);
      },
      error =>{
        console.log(error);
      }
    )
  }

  eliminarCuenta(){
    /* if(confirm("Estas seguro de eliminarla????")){
      alert("Eliminada");
    } */
    swal({
      title: "¿Estas seguro?",
      text: "Una vez eliminada, no se podra recuperar",
      icon: "warning",
      buttons: [true,true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this._usuarioService.deleteUser(this.usuario._id).subscribe(
          response =>{
            swal("Finalizado, tu usuario ha sido eliminado correctamente", {
              icon: "success",
            });
            this._usuarioService.deleteToken();
            this._router.navigate(["/"]);
            window.location.reload();
          },
          error =>{
            console.log(error);
          }
        )
      } else {
        swal("Tu usuario esta a salvo",{
          icon: "success",
        });
      }
    });
  }

}
