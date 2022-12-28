import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeapiService } from '../services/pokeapi.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-poke-pedia',
  templateUrl: './poke-pedia.component.html',
  styleUrls: ['./poke-pedia.component.css']
})
export class PokePediaComponent implements OnInit{
  
  ngOnInit(): void {
    this.getPokemons()
  }
  displayedColumns: string[] = [ 'name', 'image'];
  constructor(private pokeService: PokeapiService,private router:Router){}
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | any;

  pokemons = [];

  
  
  
  getPokemons() {
    let pokemonData;

    for (let i = 1; i <= 25; i++) {
      this.pokeService.getPokemons(i).subscribe({
        next: res => {
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name
          };

          this.data.push(pokemonData);
          this.dataSource = new MatTableDataSource<any>(this.data);
          this.dataSource.paginator = this.paginator;
        },
        error: err => {
          console.log(err);
        }
      });
    
  }

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  getPokemon(row:any){
    
    this.router.navigateByUrl(`/pokepedia/${row.name}`)
    console.log(row);
  }


}
