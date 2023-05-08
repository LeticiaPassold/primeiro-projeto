import { AppModule } from './../app.module';
import { AppRoutingModule } from './../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule }



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
    CoreModule
  ]
})
export class AppModule { }
