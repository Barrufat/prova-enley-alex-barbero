import { Component } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FilterComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private readonly router: Router) {}

  goToHome() {
    this.router.navigate(['home']);
  }
}
