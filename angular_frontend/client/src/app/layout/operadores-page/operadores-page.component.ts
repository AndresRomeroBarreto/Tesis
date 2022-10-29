import { Component, OnInit } from '@angular/core';
import { definitions, transalations } from 'src/app/models/definitions';

@Component({
  selector: 'app-operadores-page',
  templateUrl: './operadores-page.component.html',
  styleUrls: ['./operadores-page.component.scss']
})
export class OperadoresPageComponent implements OnInit {

  db: string = 'flota';
  folder: string = 'operadores';

  operador_definition = definitions.operador;
  translations = transalations.operador;

  constructor() { }

  ngOnInit(): void {
  }

}
