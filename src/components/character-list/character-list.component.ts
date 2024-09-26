import { Component, Input } from '@angular/core';
import { Character } from '../../services/character/character.model';
import { CharacterCardComponent } from '../character-card/character-card.component';

@Component({
  selector: 'character-list',
  standalone: true,
  imports: [CharacterCardComponent],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.scss',
})
export class CharacterListComponent {
  @Input() characters?: Character[];
}
