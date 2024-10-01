import { Component, Input } from '@angular/core';
import { Character } from '../../../models/character.model';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'character-detail',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.scss',
})
export class CharacterDetailComponent {
  constructor() {}

  @Input() character!: Character;
}
