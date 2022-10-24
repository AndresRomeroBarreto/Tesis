import { DateTimePickerModule } from './../../flota-elements/date-time-picker/date-time-picker.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { ProveedoresPageRoutingModule } from './proveedores-page-routing.module';
import { ProveedoresPageComponent } from './proveedores-page.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    ProveedoresPageComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    ProveedoresPageRoutingModule,
    FormsModule,
    DateTimePickerModule,
    NgbModule
  ],
  providers: []
})
export class ProveedoresPageModule { }
