import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterService } from '../services/character/character.service';
import { CharactersPageComponent } from '../pages/CharactersPage/characters-page/characters-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharactersPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'prova-alex-barbero';
}
