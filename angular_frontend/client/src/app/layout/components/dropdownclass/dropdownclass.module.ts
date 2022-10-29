import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownclassComponent } from './dropdownclass.component';



@NgModule({
  declarations: [
    DropdownclassComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DropdownclassComponent
  ]
})
export class DropdownclassModule { }
