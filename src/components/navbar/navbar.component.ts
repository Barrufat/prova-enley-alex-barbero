import { Component } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FilterComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
