import { Component, inject, OnInit } from '@angular/core';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../services/character/character.service';
import { CharacterListComponent } from '../../components/character/character-list/character-list.component';
import { PaginatorComponent } from '../../components/character/character-paginator/paginator.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'characters-page',
  standalone: true,
  imports: [CharacterListComponent, PaginatorComponent],
  templateUrl: './characters-page.component.html',
  styleUrl: './characters-page.component.scss',
})
export class CharactersPageComponent implements OnInit {
  characters?: Character[];
  readonly dialog = inject(MatDialog);

  constructor(private readonly characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.characters.subscribe((charactersState) => {
      this.characters = charactersState.characters;
    });
  }

  openDialog(characterId: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      result && this.characterService.deleteCharacter(characterId);
    });
  }
}
