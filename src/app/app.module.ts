import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RozrywkaComponent } from './rozrywka/rozrywka.component';
import { HistoriaComponent } from './historia/historia.component';
import { MapaComponent } from './mapa/mapa.component';
import { KinoComponent } from './kino/kino.component';
import { TeatrComponent } from './teatr/teatr.component';

@NgModule({
  declarations: [
    AppComponent,
    RozrywkaComponent,
    HistoriaComponent,
    MapaComponent,
    KinoComponent,
    TeatrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
