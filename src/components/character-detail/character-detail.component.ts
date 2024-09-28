import { Component, Input } from '@angular/core';
import { Character } from '../../services/character/character.model';

@Component({
  selector: 'character-detail',
  standalone: true,
  imports: [],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.scss',
})
export class CharacterDetailComponent {
  @Input() character!: Character;
}
