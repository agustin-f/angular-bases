import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';


interface Character {
  id:number;
  name:string;
  power:number;
}


@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.html',
  styleUrl: './dragonball-page.css',
})
export class DragonballPage {

    characters = signal<Character[]>([
      {id: 1, name: 'Goku', power: 9001},
      {id:2, name: 'Vegeta', power: 5000},
      {id:3, name: 'Piccolo', power:7000},
      {id:4, name: 'Yamcha', power:500}
    ]);


    powerClasses = computed(()=>{
         return{
            'text-danger':true,
         };
    });

}
