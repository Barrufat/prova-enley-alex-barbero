import { Component, EventEmitter, Input, Output } from '@angular/core';
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
import { Character } from '../../../models/character.model';

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

  @Input() modifiedCharacter?: Character;
  @Output() updateCharacter: EventEmitter<Partial<Character>> =
    new EventEmitter();

  ngOnChanges() {
    if (this.modifiedCharacter) {
      this.characterForm.patchValue(this.modifiedCharacter);
    }
  }

  onSubmit(): void {
    if (this.characterForm.valid) {
      this.updateCharacter.emit(this.characterForm.value);
    } else {
      console.error('Form is invalid');
    }
  }
}
