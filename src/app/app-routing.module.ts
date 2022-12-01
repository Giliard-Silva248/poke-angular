import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPokemonComponent } from './pages/info-pokemon/info-pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { InfPagTestComponent } from "./pages/inf-pag-test/inf-pag-test.component";

const routes: Routes = [
  {
    path:'',
    component: PokemonListComponent,

  },
  {
    path:'InfoPokemon',
    component: InfPagTestComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
