import { Component } from '@angular/core';
import { CharacterFormComponent } from '../../components/character-form/character-form.component';
import { CharacterService } from '../../services/character/character.service';
import { Character } from '../../services/character/character.model';

@Component({
  selector: 'app-add-new-page',
  standalone: true,
  imports: [CharacterFormComponent],
  templateUrl: './add-new-page.component.html',
  styleUrl: './add-new-page.component.scss',
})
export class AddNewPageComponent {
  constructor(private readonly characterService: CharacterService) {}

  onAddCharacter(character: Character) {
    this.characterService.addCharacter(character);
  }
}
