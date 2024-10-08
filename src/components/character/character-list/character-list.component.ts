import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../../models/character.model';
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
  @Output() updateCharacter: EventEmitter<number> = new EventEmitter();
  @Output() deleteCharacter: EventEmitter<number> = new EventEmitter();

  onUpdateCharacter(characterId: number) {
    this.updateCharacter.emit(characterId);
  }

  onDeleteCharacter(characterId: number) {
    this.deleteCharacter.emit(characterId);
  }
}
