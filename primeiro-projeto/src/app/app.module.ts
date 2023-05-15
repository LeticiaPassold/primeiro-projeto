import { TesteService } from './teste.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponenteComponent } from './meu-primeiro-componente/meu-primeiro-componente.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponenteComponent,
    DiretivasComponent,
    DataBindingComponent,
    HomeComponent,
    ProdutosComponent,
    PedidosComponent,
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule
  ],

  providers: [TesteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
