import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroisModule } from './herois/herois.module';  //? Modul creat i importat
import { ContadorModule } from './Contador/contador.module';




@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    HeroisModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
