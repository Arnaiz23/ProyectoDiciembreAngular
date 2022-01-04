import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/service/productos.service';
import { global } from 'src/app/service/global';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['../futbol/futbol.component.css']
})
export class SearchComponent implements OnInit {

  public productos!: Producto[];
  public url: string;

  constructor(
    private _productoService: ProductosService,
    private _route: ActivatedRoute
  ) { 
    this.url = global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      var search = params['search'];
      this._productoService.searchProducto(search).subscribe(
        response =>{
          this.productos = response.productos;
          // console.log(response.productos)
        },
        error =>{
          console.log(error);
          
        }
      )
    })
  }

  ordenar(opcion: string){
    console.log(opcion)
  }

}
