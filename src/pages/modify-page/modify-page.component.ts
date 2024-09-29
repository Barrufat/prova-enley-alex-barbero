import { Component, OnInit } from '@angular/core';
import { CharacterFormComponent } from '../../components/character-form/character-form.component';
import { Character } from '../../services/character/character.model';
import { CharacterService } from '../../services/character/character.service';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const characterId = this.route.snapshot.paramMap.get('id');

    console.log('characterId', characterId);

    this.modifiedCharacter = this.characterService.getCharacterById(
      Number(characterId!)
    );
  }

  onModifyCharacter(character: Character) {
    this.characterService.modifyCharacter(character);
  }
}
