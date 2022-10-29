import { Component, OnInit } from '@angular/core';
import { definitions, transalations } from 'src/app/models/definitions';

@Component({
  selector: 'app-catalogo-servicios-page',
  templateUrl: './catalogo-servicios-page.component.html',
  styleUrls: ['./catalogo-servicios-page.component.scss']
})
export class CatalogoServiciosPageComponent implements OnInit {

  db: string = 'flota';
  folder: string = 'servicios';

  service_definition = definitions.servicio;
  translations = transalations.servicio;

  constructor() { }

  ngOnInit(): void {
  }
}
