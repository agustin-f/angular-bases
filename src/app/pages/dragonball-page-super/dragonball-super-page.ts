import { Component, inject } from '@angular/core';
import { CharacterListComponent } from '../../components/shared/dragonball/dragonball-characterlist';
import { CharacterAddComponent } from '../../components/shared/dragonball-add/dragonball-add';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  templateUrl: './dragonball-super-page.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonballSuperPageComponent {
  public dragonballService = inject(DragonballService);
}
