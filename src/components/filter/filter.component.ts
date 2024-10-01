import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CharacterService } from '../../services/character/character.service';

@Component({
  selector: 'character-filter',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './filter.component.html',
})
export class FilterComponent {
  characterName = new FormControl('');

  constructor(private readonly characterService: CharacterService) {}

  ngOnInit() {
    this.characterName.valueChanges.subscribe(
      (value) => value && this.characterService.updateSearchName(value)
    );
  }

  resetCharacterName() {
    this.characterName.setValue('');
    this.characterService.updateSearchName(this.characterName.value);
  }
}
