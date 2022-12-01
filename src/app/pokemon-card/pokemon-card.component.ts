import { Component, Input, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from "src/app/services/pokemon.service";

import { InfoPokemonComponent } from "src/app/pages/info-pokemon/info-pokemon.component";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent{


  @Input()
  pokemon:string=''

  @Input()
  numero: number = 0
  constructor(public pokemonService: PokemonService){

  }

  pegarImagemPokemon() {
    const numeroFormatado = this.leadingZero(this.numero);

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numeroFormatado}.png`;
  }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
  }

}
