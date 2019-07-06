import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ps-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }

  pageTitle: string = "Panel de Gestión";

  ngOnInit() {
  }
}
