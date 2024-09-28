import { Routes } from '@angular/router';
import { CharactersPageComponent } from '../pages/characters-page/characters-page.component';
import { DetailPageComponent } from '../pages/detail-page/detail-page.component';

export const routes: Routes = [
  { path: '*', redirectTo: '/home' },
  { path: 'home', component: CharactersPageComponent },
  { path: 'detail', component: DetailPageComponent },
];
