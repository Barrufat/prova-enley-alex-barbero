import { Routes } from '@angular/router';
import { CharactersPageComponent } from '../pages/characters-page/characters-page.component';
import { DetailPageComponent } from '../pages/detail-page/detail-page.component';
import { ModifyPageComponent } from '../pages/modify-page/modify-page.component';
import { AddNewPageComponent } from '../pages/add-new-page/add-new-page.component';

export const routes: Routes = [
  { path: '', component: CharactersPageComponent },
  { path: 'home', component: CharactersPageComponent },
  { path: 'detail', component: DetailPageComponent },
  { path: 'add', component: AddNewPageComponent },
  { path: 'modify', component: ModifyPageComponent },
  { path: '**', redirectTo: 'home' },
];
