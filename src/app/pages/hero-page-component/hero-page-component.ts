import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-page-component',
  imports: [UpperCasePipe],
  templateUrl: './hero-page-component.html',
  styleUrl: './hero-page-component.css',
})
export class HeroPageComponent {
  name:string  = 'Ironman'
  age:number = 45

  getHeroDescription(){
      return `${ this.name } - ${ this.age }`;
  }

changeHero(){
  this.name = 'Spiderman'
  this.age = 22
}

resetForm(){
  this.name = 'Ironman'
  this.age = 45
}

changeAge(){
  this.age = 60
}

}
