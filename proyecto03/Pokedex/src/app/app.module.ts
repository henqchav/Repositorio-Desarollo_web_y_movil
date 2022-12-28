import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/table/table.component';

import { MaterialsMod } from 'src/materials/material.module'
import { HttpClientModule } from '@angular/common/http';
import { PokeInfoComponent } from './poke-info/poke-info.component';
import { PokePediaComponent } from './poke-pedia/poke-pedia.component';
import { PokeDataComponent } from './poke-data/poke-data.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    PokeInfoComponent,
    PokePediaComponent,
    PokeDataComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialsMod,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
