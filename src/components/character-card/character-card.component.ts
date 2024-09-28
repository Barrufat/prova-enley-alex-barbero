import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../services/character/character.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'character-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
})
export class CharacterCardComponent {
  @Input() character!: Character;
  @Output() updateCharacter: EventEmitter<void> = new EventEmitter();

  updateDetailCharacter() {
    this.updateCharacter.emit();
  }
}
