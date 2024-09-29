import { Routes } from '@angular/router';
import { CharactersPageComponent } from '../pages/characters-page/characters-page.component';

export const routes: Routes = [
  { path: '', component: CharactersPageComponent },
  { path: 'home', component: CharactersPageComponent },
  {
    path: 'detail',
    loadComponent: () =>
      import('../pages/detail-page/detail-page.component').then(
        (c) => c.DetailPageComponent
      ),
  },
  {
    path: 'add',
    loadComponent: () =>
      import('../pages/add-new-page/add-new-page.component').then(
        (c) => c.AddNewPageComponent
      ),
  },
  {
    path: 'modify',
    loadComponent: () =>
      import('../pages/modify-page/modify-page.component').then(
        (c) => c.ModifyPageComponent
      ),
  },
  { path: '**', redirectTo: 'home' },
];
