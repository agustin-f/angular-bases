import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/characters';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './dragonball-characterlist.html',
})
export class CharacterListComponent {
  characters = input.required<Character[]>();
  listName = input.required<string>();
}
