import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";


import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ArticulosFamiliaComponent } from './components/articulos-familia/articulos-familia.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ArticulosFamiliaComponent,
    ArticulosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    RouterModule.forRoot([
      {path: '', redirectTo:'/inicio', pathMatch:'full'},
      {path: 'inicio', component:InicioComponent},
      {path: 'articulos', component:ArticulosComponent},
      {path: 'articulosfamilias', component:ArticulosFamiliaComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
