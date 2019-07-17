import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-parametros-buscar',
  templateUrl: './parametros-buscar.component.html',
  styleUrls: ['./parametros-buscar.component.css']
})
export class ParametrosBuscarComponent implements OnInit {

  constructor() { }

  @Output() notificarBuscarParametros: EventEmitter<any> = new EventEmitter<any>();

  //Recuperar Estados dinámicamente. (implementar Servicios)
  @Input() estadosParametro;

  filtrosBusqueda = { nombre: null, modulo: null, estado: null };

  ngOnInit() {
  }

  reiniciarControles(): void {
    this.filtrosBusqueda.nombre = null;
    this.filtrosBusqueda.modulo = null;
    this.filtrosBusqueda.estado = null;
  }

  buscarParametros(): void {
    console.log("buscarParametros-ParametrosBuscarComponent")
    this.notificarBuscarParametros.emit(this.filtrosBusqueda);
  }
}