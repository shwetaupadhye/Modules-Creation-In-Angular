import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewmoduleModule } from './newmodule/newmodule.module';
import { SecondmoduleModule } from './secondmodule/secondmodule.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewmoduleModule,
    SecondmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
