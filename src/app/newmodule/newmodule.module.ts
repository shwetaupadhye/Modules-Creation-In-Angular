import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    RegisterComponent
  ],

  exports: [RegisterComponent],

  imports: [
    CommonModule
  ]
})
export class NewmoduleModule { }
