import { Component, OnInit, Output } from '@angular/core';
import { global } from 'src/app/service/global';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public precio: number;


  constructor(
    private _productoService: ProductosService
  ) { 
    this.precio = _productoService.cambiarPrecio(20);
  }

  ngOnInit(): void {
  }

}
