import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Character } from '../../services/character/character.model';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'character-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
})
export class CharacterCardComponent {
  readonly dialog = inject(MatDialog);

  constructor(private readonly router: Router) {}

  @Input() character!: Character;
  @Output() deleteCharacter: EventEmitter<void> = new EventEmitter();

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      result && this.eliminateCharacter();
    });
  }

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
