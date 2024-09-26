import { Component, Input } from '@angular/core';
import { Character } from '../../services/character/character.model';

@Component({
  selector: 'character-card',
  standalone: true,
  imports: [],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
})
export class CharacterCardComponent {
  @Input() character!: Character;
}
