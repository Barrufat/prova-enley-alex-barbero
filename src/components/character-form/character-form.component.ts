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
import { Character } from '../../services/character/character.model';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) {
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
  @Output() addCharacter: EventEmitter<Character> = new EventEmitter();
  @Output() modifyCharacter: EventEmitter<Character> = new EventEmitter();

  ngOnInit() {
    if (this.modifiedCharacter) {
      this.characterForm.patchValue(this.modifiedCharacter);
    }
  }

  getIdFormParams() {
    return Number(this.route.snapshot.paramMap.get('id'));
  }

  getRandomId(digits: number) {
    if (digits <= 0) {
      throw new Error('El número de dígitos debe ser mayor que 0');
    }
    const min = Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  onSubmit(): void {
    if (this.characterForm.valid) {
      this.characterData = {
        ...this.characterData,
        ...this.characterForm.value,
      };

      if (this.modifiedCharacter) {
        this.characterData.id = this.getIdFormParams();
        this.modifyCharacter.emit(this.characterData);
      } else {
        this.characterData.id = this.getRandomId(5);
        this.addCharacter.emit(this.characterData);
      }
    } else {
      console.log('Form is invalid');
    }
  }
}
