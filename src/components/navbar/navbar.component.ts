import { Component, OnInit } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { NavigationEnd, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FilterComponent, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isHomeActive?: boolean;
  isAddActive?: boolean;

  constructor(private readonly router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isHomeActive = event.url === '/home';
        this.isAddActive = event.url === '/add';
      });
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  goToAddNew() {
    this.router.navigate(['add']);
  }
}
