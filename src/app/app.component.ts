import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharactersPageComponent } from '../pages/characters-page/characters-page.component';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharactersPageComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'prova-tecnica-alex-barbero';
}
