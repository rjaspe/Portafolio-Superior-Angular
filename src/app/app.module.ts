import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParametrosComponent } from './settings/gestion-parametros/parametros/parametros.component';
import { ParametrosBuscarComponent } from './settings/gestion-parametros/parametros-buscar/parametros-buscar.component';
import { ParametrosListComponent } from './settings/gestion-parametros/parametros-list/parametros-list.component';
import { ParametroGestionarComponent } from './settings/gestion-parametros/parametro-gestionar/parametro-gestionar.component';

@NgModule({
  declarations: [
    AppComponent,
    ParametrosComponent,
    ParametrosBuscarComponent,
    ParametrosListComponent,
    ParametroGestionarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
