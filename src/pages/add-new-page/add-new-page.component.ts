import { Component } from '@angular/core';
import { CharacterFormComponent } from '../../components/character/character-form/character-form.component';
import { CharacterService } from '../../services/character/character.service';
import { Character } from '../../models/character.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-page',
  standalone: true,
  imports: [CharacterFormComponent],
  templateUrl: './add-new-page.component.html',
  styleUrl: './add-new-page.component.scss',
})
export class AddNewPageComponent {
  constructor(
    private readonly characterService: CharacterService,
    private readonly router: Router
  ) {}

  addCharacter(character: Partial<Character>) {
    this.characterService.addCharacter(character as Omit<Character, 'id'>);
    this.router.navigate(['home']);
  }
}
