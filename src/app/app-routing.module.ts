import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriaComponent } from './historia/historia.component';
import { KinoComponent } from './kino/kino.component';
import { MapaComponent } from './mapa/mapa.component';
import { RozrywkaComponent } from './rozrywka/rozrywka.component';
import { TeatrComponent } from './teatr/teatr.component';

const routes: Routes = [
  {path:"rozrywka",component:RozrywkaComponent,children:[
    {path:"kino",component:KinoComponent},
    {path:"teatr",component:TeatrComponent}
  ]},
  {path:"mapa",component:MapaComponent},
  {path:"rozrywka",component:RozrywkaComponent},
  {path:"historia",component:HistoriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
