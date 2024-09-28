import { Component } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FilterComponent, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private readonly router: Router) {}

  goToHome() {
    this.router.navigate(['home']);
  }

  goToAddNew() {
    this.router.navigate(['add']);
  }
}
