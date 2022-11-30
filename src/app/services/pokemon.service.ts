import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
//import { requisicao } from 'rxjs' ;
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons:any = [];

  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
  }

  async carregarPokemons() {
    const requisicao = await this.httpClient
      .get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
      .toPromise();

      console.log(requisicao);

    this.pokemons = requisicao.results;
  }
}
