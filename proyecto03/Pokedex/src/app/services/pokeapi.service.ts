import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  baseUrl = 'https://pokeapi.co/api/v2'
  constructor(private http: HttpClient) { }

  getPokemons(index:any){
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }

  
}