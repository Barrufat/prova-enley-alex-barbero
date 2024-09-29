import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../services/character/character.model';
import { CharacterDetailComponent } from '../../components/character-detail/character-detail.component';
import { CharacterService } from '../../services/character/character.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [CharacterDetailComponent],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss',
})
export class DetailPageComponent implements OnInit {
  character!: Character;

  constructor(
    private readonly characterService: CharacterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const characterId = this.route.snapshot.paramMap.get('id');

    console.log('characterId', characterId);
    this.character = this.characterService.getCharacterById(
      Number(characterId!)
    );
  }
}
