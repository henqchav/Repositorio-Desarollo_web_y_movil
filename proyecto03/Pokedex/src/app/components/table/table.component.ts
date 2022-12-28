import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  displayedColumns: string[] = ['position', 'image', 'name'];
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);
  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | any;
  pokemons = [];

  constructor(private pokeService: PokeapiService,private router:Router){}

  ngOnInit(): void {
    this.getPokemons()
  }
  
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
          this.dataSource = new MatTableDataSource<any>(this.data)
          this.dataSource.paginator = this.paginator
        },
        error: err => {
          console.log(err);
        },
    });
    }
  }

  

  getRow(row:any){
    this.router.navigateByUrl(`/info/${row.position}`)
    console.log(row)
  }
}
