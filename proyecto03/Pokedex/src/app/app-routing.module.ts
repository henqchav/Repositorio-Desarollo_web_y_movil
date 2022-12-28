import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from  './components/table/table.component';
import { PokeDataComponent } from './poke-data/poke-data.component';
import { PokeInfoComponent } from './poke-info/poke-info.component';
import { PokePediaComponent } from './poke-pedia/poke-pedia.component';

const routes: Routes = [
  {path: "home", component: TableComponent},
  {path: "info/:id", component: PokeInfoComponent},
  {path: "pokepedia", component: PokePediaComponent},
  {path: "pokepedia/:name", component: PokeDataComponent},
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "**", pathMatch: "full", redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
