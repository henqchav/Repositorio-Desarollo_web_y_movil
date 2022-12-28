import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-poke-data',
  templateUrl: './poke-data.component.html',
  styleUrls: ['./poke-data.component.css']
})
export class PokeDataComponent implements OnInit{
  ngOnInit(): void {
    
  }

  pokemon:any = ``
  pokeimg = ``
  pokeinfo =  []

  stat1 = []
  stat2 = []
  stat3 = []
  stat4 = []
  stat5 = []
  stat6 = []

  ability = []

  constructor(private activatedRouter: ActivatedRoute, private pokeService: PokeapiService){

    this.activatedRouter.params.subscribe(
      params => {
        this.getPokemon(params["name"])
      }
    )
  }


  getPokemon(name:any) {
    this.pokeService.getPokemons(name).subscribe({
      next: res => {
        console.log(res);
        this.pokemon = res;
        this.pokeimg = this.pokemon.sprites.front_default;
        this.pokeinfo = res.types[0].type.name;
        this.stat1 = res.stats[0].base_stat //hp
        this.stat2 = res.stats[1].base_stat
        this.stat3 = res.stats[2].base_stat
        this.stat4 = res.stats[3].base_stat
        this.stat5 = res.stats[4].base_stat
        this.stat6 = res.stats[5].base_stat
        this.ability = res.abilities[0].ability["name"]
      },
      error: err => {
        console.log(err);
      }
  })
  }

}
