import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component';



@NgModule({
  declarations: [
    SecondcomponentComponent
  ],
  exports: [SecondcomponentComponent],
  imports: [
    CommonModule
  ]
})
export class SecondmoduleModule { }
