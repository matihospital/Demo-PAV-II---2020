import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { MyInterceptor } from "./shared/my-interceptor";

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ArticulosFamiliaComponent } from './components/articulos-familia/articulos-familia.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { MenuComponent } from './components/menu/menu.component';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ArticulosFamiliaComponent,
    ArticulosComponent,
    MenuComponent,
    ModalDialogComponent
  ],
  entryComponents: [ModalDialogComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbModalModule,
    RouterModule.forRoot([
      {path: '', redirectTo:'/inicio', pathMatch:'full'},
      {path: 'inicio', component:InicioComponent},
      {path: 'articulos', component:ArticulosComponent},
      {path: 'articulosfamilias', component:ArticulosFamiliaComponent},
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
