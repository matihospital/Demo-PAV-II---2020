import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { ArticuloFamilia, ArticulosFamilias } from 'src/app/models/articulo-familia';
//Datos harcodeados
import { MockArticulosFamiliasService } from 'src/app/services/mock-articulos-familias.service'
//Datos desde la API
import { ArticulosFamiliasService } from 'src/app/services/articulos-familias.service'

@Component({
  selector: 'app-articulos-familia',
  templateUrl: './articulos-familia.component.html',
  styleUrls: ['./articulos-familia.component.css']
})
export class ArticulosFamiliaComponent implements OnInit {
  titulo = 'Articulos Familias';
  Items: ArticuloFamilia[] = [] ;

  constructor(private ArticulosFamiliasService : ArticulosFamiliasService) { }

  ngOnInit(): void {
    this.getArticulosFamilias();
  }

  getArticulosFamilias(){
    this.ArticulosFamiliasService.getArticulosFamilia().subscribe(
      (res:ArticuloFamilia[] )=> {this.Items = res}
    );
  }
}
