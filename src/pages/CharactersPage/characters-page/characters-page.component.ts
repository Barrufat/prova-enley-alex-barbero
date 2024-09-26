import { Component, OnInit } from '@angular/core';
import { Character } from '../../../services/character/character.model';
import { CharacterService } from '../../../services/character/character.service';

@Component({
  selector: 'characters-page',
  standalone: true,
  imports: [],
  templateUrl: './characters-page.component.html',
  styleUrl: './characters-page.component.scss',
})
export class CharactersPageComponent implements OnInit {
  characters?: Character[];

  constructor(private readonly characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters('1').subscribe((data) => {
      this.characters = data.results;
      console.log('characters: ', this.characters);
    });
  }
}
