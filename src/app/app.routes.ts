import { Routes } from '@angular/router';
import { CharactersPageComponent } from '../pages/characters-page/characters-page.component';
import { NotFoundPageComponent } from '../pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: CharactersPageComponent,
    data: { title: 'Rick & Morty | Home' },
  },
  {
    path: 'character',
    children: [
      {
        path: 'detail/:id',
        loadComponent: () =>
          import('../pages/detail-page/detail-page.component').then(
            (c) => c.DetailPageComponent
          ),
        data: { title: 'Rick & Morty | Detail' },
      },
      {
        path: 'add',
        loadComponent: () =>
          import('../pages/add-new-page/add-new-page.component').then(
            (c) => c.AddNewPageComponent
          ),
        data: { title: 'Rick & Morty | Add' },
      },
      {
        path: 'edit/:id',
        loadComponent: () =>
          import('../pages/modify-page/modify-page.component').then(
            (c) => c.ModifyPageComponent
          ),
        data: { title: 'Rick & Morty | Edit' },
      },
    ],
  },
  { path: 'not-found', component: NotFoundPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found' },
];
