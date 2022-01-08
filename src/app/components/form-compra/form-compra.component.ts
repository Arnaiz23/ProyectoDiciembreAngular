import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-form-compra',
  templateUrl: './form-compra.component.html',
  styleUrls: ['./form-compra.component.css']
})
export class FormCompraComponent implements OnInit {

  public carrito!: Array<any>;
  public data: any;

  constructor(
    private _productoService: ProductosService,
    private _router: Router
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
  }

  finalizarCompra() {
    this.carrito = this._productoService.devolverCarrito();
    
    alert("Compra exitosa");
    localStorage.removeItem("carrito");
    this._router.navigate(['/']);

    // Meterle una alerta de las guapas
    // Crear BBDD de compras con (_idCompra, dataCompra, _idUsuario)
  }

}
