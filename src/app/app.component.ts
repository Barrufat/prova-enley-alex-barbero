import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'prova-tecnica-alex-barbero';

  constructor(private readonly router: Router) {}

  ngOnInit() {
    const currentPath = this.router.url;

    console.log('currentPath', currentPath);
  }
}
