import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { ProductosService } from 'src/app/service/productos.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import swal from "sweetalert";

@Component({
  selector: 'app-form-compra',
  templateUrl: './form-compra.component.html',
  styleUrls: ['./form-compra.component.css']
})
export class FormCompraComponent implements OnInit {

  public carrito!: Array<any>;
  public data: any;
  public usuario!: Usuario;
  public updateUser!: Usuario;

  constructor(
    private _productoService: ProductosService,
    private _router: Router,
    private _usuarioService: UsuarioService
  ) { 
    this.data = {
      calle: "",
      codigoPostal: "",
      localidad: "",
      nombreTitular: "",
      numeroTarjeta: "",
      fecha: "",
      cvc: ""
    }
  }

  ngOnInit(): void {
    this.recogerUsuario();
  }

  recogerUsuario(){
    this._usuarioService.identidad().subscribe(
      response =>{
        // console.log(response.usuario[0])
        this.usuario = response.usuario[0];
      },
      err =>{
        console.log(err.error)
      }
    )
  }

  finalizarCompra() {
    this.carrito = this._productoService.devolverCarrito();

    let direcciones = this.usuario.direcciones;

    let direccion = { "calle" : this.data.calle};

    direcciones.push(direccion);

    this.updateUser = new Usuario(this.usuario._id,this.usuario.usuario,this.usuario.password,this.usuario.tipo,this.usuario.nombre,this.usuario.apellidos,this.usuario.correo,direcciones);

    this._usuarioService.updateUser(this.usuario._id,this.updateUser).subscribe(
      response => {
        // console.log(response);
        swal("Exito","Compra realizada con exito","success");
        localStorage.removeItem("carrito");
        this._router.navigate(['/']);
      },
      error =>{
        // console.log(error);
        swal("Error","No se ha podido guardar la direccion","danger");
      }
    );


    // ! Coger la calle de data.calle y guardarla en el usuario
    // ! Crear BBDD de compras con (_idCompra, dataCompra, _idUsuario)
  }

}
