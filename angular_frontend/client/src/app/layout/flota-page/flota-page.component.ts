import { Component, OnInit } from '@angular/core';
import { definitions, transalations } from 'src/app/models/definitions';


@Component({
  selector: 'app-flota-page',
  templateUrl: './flota-page.component.html',
  styleUrls: ['./flota-page.component.scss']
})
export class FlotaPageComponent implements OnInit {

  db: string = 'flota';
  folder: string = 'vehiculos';

  vehiculo_definition = definitions.vehiculo;
  translations = transalations.vehiculo;

  constructor() { }

  ngOnInit(): void {
  }

}
