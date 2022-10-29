import { Component, OnInit } from '@angular/core';
import { definitions, transalations } from 'src/app/models/definitions';

@Component({
  selector: 'app-poliza-seguros-page',
  templateUrl: './poliza-seguros-page.component.html',
  styleUrls: ['./poliza-seguros-page.component.scss']
})
export class PolizaSegurosPageComponent implements OnInit {

  db: string = 'flota';
  folder: string = 'polizas';

  poliza_definition = definitions.poliza;
  translations = transalations.poliza;

  constructor() { }

  ngOnInit(): void {
  }

}
