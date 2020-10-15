import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ArticulosFamiliasService {

  private urlApi = 'http://labsys.frc.utn.edu.ar:8080/api/ArticulosFamilias/';

  constructor(private myHttp: HttpClient) { }

  getArticulosFamilia(){
    return this.myHttp.get(this.urlApi);
  }
}
