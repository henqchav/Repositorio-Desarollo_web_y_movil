import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.css']
})
export class PokeInfoComponent implements OnInit{
  ngOnInit(): void {
  }
  pokemon:any = ``
  pokeimg = ``
  pokeinfo =  []
  

  constructor(private activatedRouter: ActivatedRoute, private pokeService: PokeapiService){

    this.activatedRouter.params.subscribe(
      params => {
        this.getPokemon(params["id"])
      }
    )
  }

  getPokemon(id:any) {
    this.pokeService.getPokemons(id).subscribe({
      next: res => {
        console.log(res);
        this.pokemon = res;
        this.pokeimg = this.pokemon.sprites.front_default;
        this.pokeinfo = res.types[0].type.name;
        
        

        
      },
      error: err => {
        console.log(err);
      }
  })
  }

}
