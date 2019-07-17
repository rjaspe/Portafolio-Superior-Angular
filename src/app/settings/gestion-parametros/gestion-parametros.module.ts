import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ParametrosListComponent } from './parametros-list/parametros-list.component';
import { ParametrosBuscarComponent } from './parametros-buscar/parametros-buscar.component';
import { ParametroGestionarComponent } from './parametro-gestionar/parametro-gestionar.component';
import { ParametrosComponent } from './parametros/parametros.component';

@NgModule({
  declarations: [
    ParametrosListComponent,
    ParametrosBuscarComponent,
    ParametroGestionarComponent,
    ParametrosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ParametrosListComponent, ParametrosBuscarComponent, ParametroGestionarComponent, ParametrosComponent]
})
export class GestionParametrosModule { }
