import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private titleService: Title) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.router.routerState.root.firstChild;
        if (currentRoute) {
          currentRoute.data.subscribe((data) => {
            const title = data['title'];
            this.titleService.setTitle(title);
          });
        }
      });
  }
}
