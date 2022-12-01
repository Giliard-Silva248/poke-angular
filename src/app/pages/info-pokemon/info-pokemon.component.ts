import { Component, Input, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from "src/app/services/pokemon.service";

@Component({
  selector: 'app-info-pokemon',
  templateUrl: './info-pokemon.component.html',
  styleUrls: ['./info-pokemon.component.css']
})
export class InfoPokemonComponent implements OnInit {
  @Input()
  pokemons:PokemonData

  constructor(private service:PokemonService){
    this.pokemons = {
      id:0,
      name:'',
      sprites:{
        front_default: ''
      },
      types:[]
    }

  }
  ngOnInit(): void {
    this.getPokemon('bulbasaur')

  }

  getPokemon(searchName:string){


    this.service.getPokemon(searchName).subscribe(
      {
        next: (res) => {
          this.pokemons = {

            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types,
          }

        },
        error: (err) =>console.log('not found')

      })


  }
}
