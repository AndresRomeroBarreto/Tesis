import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from './switch.component';



@NgModule({
  declarations: [
    SwitchComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SwitchComponent
  ]
})
export class SwitchModule { }
