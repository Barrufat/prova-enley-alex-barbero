import { Component } from '@angular/core';
import { CharacterService } from '../../services/character/character.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'character-paginator',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class PaginatorComponent {
  totalCharacters?: number;

  constructor(private readonly characterService: CharacterService) {
    this.characterService.search.subscribe(
      (search) => (this.totalCharacters = search.total)
    );
  }

  handlePageEvent(pageEvent: PageEvent) {
    this.characterService.updateSearchPage(pageEvent.pageIndex);
  }
}
