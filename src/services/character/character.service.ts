import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse, Character } from './character.model';
import { BehaviorSubject, Observable } from 'rxjs';

interface Search {
  characterName: string;
  page: number;
}

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private readonly CHARACTER_PAGE_API =
    'https://rickandmortyapi.com/api/character/';

  private charactersSubject = new BehaviorSubject<Character[]>([]);
  characters = this.charactersSubject.asObservable();

  private searchSubject = new BehaviorSubject<Search>({
    characterName: '',
    page: 1,
  });
  search = this.searchSubject.asObservable();

  constructor(private readonly httpClient: HttpClient) {
    this.getCharacters();
  }

  searchByName(name: string | null) {
    this.searchSubject.next({
      ...this.searchSubject.value,
      characterName: name ? name : '',
    });
    this.getCharacters();
  }

  public getCharacters(): void {
    const response = this.httpClient.get<ApiResponse<Character[]>>(
      this.CHARACTER_PAGE_API +
        '?page=' +
        this.searchSubject.value.page +
        '&name=' +
        this.searchSubject.value.characterName
    );

    response.subscribe((response) =>
      this.charactersSubject.next(response.results!)
    );
  }
}
