import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdowncatalogComponent } from './dropdowncatalog.component';



@NgModule({
  declarations: [
    DropdowncatalogComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DropdowncatalogComponent
  ]
})
export class DropdowncatalogModule { }
