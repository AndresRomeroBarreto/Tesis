import { TableComponent } from './table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CatalogService } from 'src/app/services/catalog.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    NgbModule
  ],
  providers: [
    CatalogService
  ]
})
export class TableModule { }
