import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Character } from '../../services/character/character.model';

@Component({
  selector: 'character-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './character-form.component.html',
  styleUrl: './character-form.component.scss',
})
export class CharacterFormComponent {
  characterData: Character = {
    episode: [],
    gender: 'unknown',
    id: 0,
    image: 'unknown',
    name: 'unknown',
    species: 'unknown',
    status: 'unknown',
    type: 'unknown',
  };

  characterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.characterForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', [Validators.required]],
      image: ['', [Validators.required]],
      species: ['', [Validators.required]],
      status: ['', [Validators.required]],
      type: ['', [Validators.required]],
    });
  }
  @Output() addCharacter: EventEmitter<Character> = new EventEmitter();

  onSubmit(): void {
    if (this.characterForm.valid) {
      this.characterData = {
        ...this.characterData,
        ...this.characterForm.value,
      };

      console.log('characterData', this.characterData);
      this.addCharacter.emit(this.characterData);
    } else {
      console.log('Form is invalid');
    }
  }
}
