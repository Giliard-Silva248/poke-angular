import { Component, Input, OnInit } from '@angular/core';

import { PokemonService } from "src/app/services/pokemon.service";


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

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroFormatado}.png`;
  }

  leadingZero(str: string | number, ): string {
    let s = String(str);

    return s;
  }

}
