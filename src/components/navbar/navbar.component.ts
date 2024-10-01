import { Component, HostListener, OnInit } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { NavigationEnd, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FilterComponent, MatIconModule, MatExpansionModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isHomeActive?: boolean;
  isAddActive?: boolean;
  isMobile?: boolean;

  constructor(private readonly router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isHomeActive = event.url === '/home' || event.url === '/';
        this.isAddActive = event.url === '/add';
      });

    this.isMobile = window.innerWidth <= 480;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = window.innerWidth <= 480;
  }
}
