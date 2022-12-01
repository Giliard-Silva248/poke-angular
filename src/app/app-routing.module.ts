import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPokemonComponent } from './pages/info-pokemon/info-pokemon.component';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';


const routes: Routes = [
  {
    path:'',
    component: PokemonListComponent,

  },
  {
    path:'InfoPokemon',
    component: InfoPokemonComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
