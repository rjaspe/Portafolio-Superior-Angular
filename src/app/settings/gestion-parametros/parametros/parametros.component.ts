import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css']
})
export class ParametrosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  estadosParametro = [{
    value: "0",
    text: "Inactivo",
    selected: false
  }, {
    value: "1",
    text: "Activo",
    selected: false
  }]

  buscarParametros(event): void {
    console.log("buscarParametros-ParametrosComponent" + JSON.stringify(event));
  }
}
