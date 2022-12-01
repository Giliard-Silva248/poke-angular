import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

import { HttpClientModule } from '@angular/common/http';

import { PokemonService } from './services/pokemon.service';
import { InfoPokemonComponent } from './pages/info-pokemon/info-pokemon.component';
import { MenuComponent } from './share/menu/menu.component';
import { InfPagTestComponent } from './pages/inf-pag-test/inf-pag-test.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    InfoPokemonComponent,
    MenuComponent,
    InfPagTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
