import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Character } from '../../../models/character.model';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'character-card',
  standalone: true,
  imports: [MatIconModule, RouterModule],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
})
export class CharacterCardComponent {
  @Input() character!: Character;
  @Output() deleteCharacter: EventEmitter<void> = new EventEmitter();

  eliminateCharacter() {
    this.deleteCharacter.emit();
  }
}
