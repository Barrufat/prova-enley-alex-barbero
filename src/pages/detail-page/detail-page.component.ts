import { Component, Input } from '@angular/core';
import { Character } from '../../services/character/character.model';
import { CharacterDetailComponent } from '../../components/character-detail/character-detail.component';
import { CharacterService } from '../../services/character/character.service';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [CharacterDetailComponent],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss',
})
export class DetailPageComponent {
  character!: Character;

  constructor(private readonly characterService: CharacterService) {
    this.characterService.characters.subscribe(
      (charactersState) => (this.character = charactersState.characterDetail!)
    );
  }
}
