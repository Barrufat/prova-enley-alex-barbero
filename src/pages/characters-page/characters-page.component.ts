import { Component, OnInit } from '@angular/core';
import { Character } from '../../services/character/character.model';
import { CharacterService } from '../../services/character/character.service';
import { CharacterListComponent } from '../../components/character-list/character-list.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';

@Component({
  selector: 'characters-page',
  standalone: true,
  imports: [CharacterListComponent, PaginatorComponent],
  templateUrl: './characters-page.component.html',
  styleUrl: './characters-page.component.scss',
})
export class CharactersPageComponent implements OnInit {
  characters?: Character[];

  constructor(private readonly characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.characters.subscribe((charactersState) => {
      this.characters = charactersState.characters;
    });
  }

  onDeleteCharacter(characterId: number) {
    this.characterService.deleteCharacter(characterId);
  }
}
