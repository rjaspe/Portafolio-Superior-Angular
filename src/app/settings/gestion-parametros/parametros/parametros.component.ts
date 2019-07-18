import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css']
})
export class ParametrosComponent implements OnInit {

  constructor() { }

  //Recuperar dinámicamente estos estados (Via Servicios)
  estadosParametro = [
    { value: "0", text: "Inactivo", selected: false },
    { value: "1", text: "Activo", selected: false }
  ]

  esEditando: boolean;

  estadoSecciones: any = {
    seccionFiltrosVisible: null,
    seccionListadoVisible: null,
    seccionFormularioVisible: null,
  }

  //#region Hooks
  ngOnInit() { this.ajustarInterfazParametros({ editando: false }) }
  //#endregion

  //#region Methos
  buscarParametros(event): void {
    console.log("buscarParametros-ParametrosComponent" + JSON.stringify(event));
  }

  ajustarInterfazParametros(datos): void {
    this.esEditando = datos.editando;

    this.estadoSecciones.seccionFiltrosVisible = this.esEditando ? "none" : "block";
    this.estadoSecciones.seccionListadoVisible = this.esEditando ? "none" : "block";
    this.estadoSecciones.seccionFormularioVisible = this.esEditando ? "block" : "none";

    console.log("ParametrosComponent-ajustarInterfazParametros: Editando=" + this.esEditando.toString());
  }
  //#endregion
}
