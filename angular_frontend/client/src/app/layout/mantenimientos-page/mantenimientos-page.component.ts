import { Component, OnInit } from '@angular/core';
import { definitions, transalations } from 'src/app/models/definitions';

@Component({
  selector: 'app-mantenimientos-page',
  templateUrl: './mantenimientos-page.component.html',
  styleUrls: ['./mantenimientos-page.component.scss']
})
export class MantenimientosPageComponent implements OnInit {


  db: string = 'flota';
  folder: string = 'mantenimientos';

  mantenimiento_definition = definitions.mantenimiento;
  translations = transalations.mantenimiento;

  constructor() { }

  ngOnInit(): void {
  }

}
