import { Component, OnInit } from '@angular/core';
import { definitions, transalations } from 'src/app/models/definitions';

@Component({
  selector: 'app-proveedores-page',
  templateUrl: './proveedores-page.component.html',
  styleUrls: ['./proveedores-page.component.scss']
})
export class ProveedoresPageComponent implements OnInit {

  db: string = 'flota';
  folder: string = 'proveedores';

  proveedor_definition = definitions.proveedor;
  translations = transalations.proveedor;

  constructor() { }

  ngOnInit(): void {
  }
}
