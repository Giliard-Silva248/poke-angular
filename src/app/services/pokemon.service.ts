import { Injectable, Input} from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import { Observable } from 'rxjs';

import { PokemonData } from "../models/pokemonData";
import { environment } from "src/environments/envionments";


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL:string = ""
  private pokeData:PokemonData | any
  pokemons:any = [];

  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
    this.baseURL = environment.pokeApi
  }

  

  async carregarPokemons() {
    const requisicao = await this.httpClient
      .get<any>('https://pokeapi.co/api/v2/pokemon?limit=5')
      .toPromise();

      //console.log(requisicao);

    this.pokemons = requisicao.results;
  }


  getPokemon(pokemonName: string):Observable<PokemonData>{
    this.pokeData = this.httpClient.get<PokemonData>(`${this.baseURL}${pokemonName}`)


    return this.pokeData
  }
}
