import { TesteService } from './teste.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponenteComponent } from './meu-primeiro-componente/meu-primeiro-componente.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponenteComponent,
    DiretivasComponent,
    DataBindingComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule
  ],

  providers: [TesteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
