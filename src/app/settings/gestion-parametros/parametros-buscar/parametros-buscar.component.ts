import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-parametros-buscar',
  templateUrl: './parametros-buscar.component.html',
  styleUrls: ['./parametros-buscar.component.css']
})
export class ParametrosBuscarComponent implements OnInit {

  constructor() { }

  @Output() notificarBuscarParametros: EventEmitter<any> = new EventEmitter<any>();
  @Output() ajustarInterfazParametros: EventEmitter<any> = new EventEmitter<any>();

  @Input() estadosParametro;

  filtrosBusqueda = { nombre: null, estado: null };

  //#region [Hooks]
  ngOnInit() {
  }
  //#endregion

  //#region [Methods]
  reiniciarControles(): void {
    this.filtrosBusqueda.nombre = null;
    this.filtrosBusqueda.estado = null;

    this.buscarParametros();
  }

  buscarParametros(): void {
    this.ajustarInterfazParametros.emit({ editando: false })
    this.notificarBuscarParametros.emit(this.filtrosBusqueda);
  }

  crearParametro(): void {
    this.ajustarInterfazParametros.emit({ editando: true })
  }
  //#endregion
}