import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb(){
    const heroes = [
      {id:11, name: 'Mr. Nice'},
      {id:12, name: 'Mr. Nice'},
      {id:13, name: 'Mr. Nice'},
      {id:14, name: 'Mr. Nice'},
      {id:15, name: 'Mr. Nice'},
      {id:16, name: 'Mr. Nice'},
      {id:17, name: 'Mr. Nice'},
      {id:18, name: 'Mr. Nice'},
      {id:19, name: 'Mr. Nice'},
      {id:20, name: 'Mr. Nice'},
    ];
    return {heroes};
  }
  
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.

  genId(heroes: Hero[]): number{
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1: 11;
  }


  constructor() { }
}
