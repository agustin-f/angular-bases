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

    name = signal('Gohan')
    power = signal(0)

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

    addCharacter(){
      const lastCharacter = this.characters()[this.characters().length - 1];
      console.log("El nombre es: " + this.name() + " y su poder es de " + this.power());

      if(!this.name() || !this.power() || this.power() <= 0){
          return;
      }

      const newCharacter: Character = {
         id: this.characters().length + 1,
         name: this.name(),
         power: this.power()
      };

      this.characters.update(
        (list)=>[... list, newCharacter]
      )
      this.resetFiels()
    }

      resetFiels(){
        this.name.set('');
        this.power.set(0);
      }

}
