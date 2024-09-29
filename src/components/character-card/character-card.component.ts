import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../services/character/character.model';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'character-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
})
export class CharacterCardComponent {
  constructor(private readonly router: Router) {}

  @Input() character!: Character;
  @Output() deleteCharacter: EventEmitter<void> = new EventEmitter();

  eliminateCharacter() {
    this.deleteCharacter.emit();
  }

  goToDetail() {
    this.router.navigate(['detail', { id: this.character.id }]);
  }

  goToModify() {
    this.router.navigate(['modify', { id: this.character.id }]);
  }
}
