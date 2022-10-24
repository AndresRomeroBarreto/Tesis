import { Component, OnInit } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { asapScheduler } from 'rxjs';

@Component({
  selector: 'app-proveedores-page',
  templateUrl: './proveedores-page.component.html',
  styleUrls: ['./proveedores-page.component.scss']
})
export class ProveedoresPageComponent implements OnInit {

  filter: string = '';
  proveedores: any[] = [
    {
      categoria: 'Combustible',
      nombre: 'Shell',
      RUC:'0992422025001',
      descripcion: 'Comericalizadora de combustible',
      contacto_phone: '(04) 263 4220',
      contacto_mail: 'contacto@energylider.com.ec'
    },
    {
      categoria: 'Combustible',
      nombre: 'Petroecuador',
      RUC:'1768153530001',
      descripcion: 'Comericalizadora de combustible',
      contacto_phone: '(02) 394 2000',
      contacto_mail: 'info@petroecuador.com'
    },
    {
      categoria: 'Aseguradora',
      nombre: 'Seguros Equinoccial S. A.',
      RUC:'1790007502001',
      descripcion: 'Aseguradora camiones',
      contacto_phone: '(02) 398 4000',
      contacto_mail: 'info@segurosequinoccial.com'
    },
    {
      categoria: 'Aseguradora',
      nombre: 'Latina Seguros',
      RUC:'0991311637001',
      descripcion: 'Aseguradora camiones',
      contacto_phone: '(04) 259 0500',
      contacto_mail: 'No registrado'
    },
  ];
  proveedor_selected: any = null;

  collectionSize: number = 0;
  page: number = 1;
  pageSize: any = 5;

  modal_reference: any;
  persona: any = {
    nombre: 'Andres',
    apellido: 'Romero'
  };

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  agregar() {}

  search_data(){}

  select_proveedor(data:string){}

  editar(){}

  eliminar(){}

  refreshTable(){}

  selectPage(page: string) {
    this.page = parseInt(page)
  }

  open(content: any) {
    this.modal_reference = this.modalService.open(content, {centered: true, size: 'lg', backdrop: 'static', keyboard: false});
  }

  process_modal_event(event: any) {
    this.modal_reference.close();
    console.log(event);

  }
}
