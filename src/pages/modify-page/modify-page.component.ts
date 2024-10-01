import { Component, OnInit } from '@angular/core';
import { CharacterFormComponent } from '../../components/character/character-form/character-form.component';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../services/character/character.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modify-page',
  standalone: true,
  imports: [CharacterFormComponent],
  templateUrl: './modify-page.component.html',
  styleUrl: './modify-page.component.scss',
})
export class ModifyPageComponent implements OnInit {
  modifiedCharacter!: Character;

  constructor(
    private readonly characterService: CharacterService,
    private readonly router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const characterId = this.route.snapshot.paramMap.get('id');

    this.characterService.getCharacterById(Number(characterId!));
    this.characterService.characters.subscribe((charactersState) => {
      this.modifiedCharacter = charactersState.character;
    });
  }

  modifyCharacter(character: Partial<Character>) {
    const newCharacter: Character = {
      ...(character as Omit<Character, 'id'>),
      id: this.modifiedCharacter.id,
    };

    this.characterService.modifyCharacter(newCharacter);
    this.router.navigate(['home']);
  }
}
