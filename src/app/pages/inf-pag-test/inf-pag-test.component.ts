import { Component } from '@angular/core';
import { PokemonService } from "src/app/services/pokemon.service";



@Component({
  selector: 'app-inf-pag-test',
  templateUrl: './inf-pag-test.component.html',
  styleUrls: ['./inf-pag-test.component.css']
})
export class InfPagTestComponent {
  constructor(public pokemonService: PokemonService){

  }
}
