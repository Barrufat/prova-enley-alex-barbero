import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse, Character } from './character.model';
import { BehaviorSubject } from 'rxjs';

interface SearchState {
  characterName: string;
  page: number;
  total: number;
}
interface CharactersState {
  characters: Character[];
  characterDetail: Character | null;
}

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private readonly CHARACTER_PAGE_API =
    'https://rickandmortyapi.com/api/character/';

  private charactersSubject = new BehaviorSubject<CharactersState>({
    characters: [],
    characterDetail: null,
  });
  characters = this.charactersSubject.asObservable();

  private searchSubject = new BehaviorSubject<SearchState>({
    characterName: '',
    page: 1,
    total: 0,
  });
  search = this.searchSubject.asObservable();

  constructor(private readonly httpClient: HttpClient) {
    this.getCharacters();
  }

  updateSearchName(name: string | null) {
    this.searchSubject.next({
      ...this.searchSubject.value,
      characterName: name ? name : '',
      page: name ? 1 : this.searchSubject.value.page,
    });
    this.getCharacters();
  }

  updateSearchPage(pageIndex: number) {
    console.log('pageIndex', pageIndex);
    this.searchSubject.next({
      ...this.searchSubject.value,
      page: pageIndex !== null ? pageIndex + 1 : this.searchSubject.value.page,
    });

    this.getCharacters();
  }

  updateDetailCharacter(characterId: number) {
    const currentCharacter = this.charactersSubject.value.characters.find(
      (character) => character.id === characterId
    );
    this.charactersSubject.next({
      ...this.charactersSubject.value,
      characterDetail: currentCharacter!,
    });
  }

  public getCharacters(): void {
    const response = this.httpClient.get<ApiResponse<Character[]>>(
      this.CHARACTER_PAGE_API +
        '?page=' +
        this.searchSubject.value.page +
        '&name=' +
        this.searchSubject.value.characterName
    );

    response.subscribe((response) => {
      this.charactersSubject.next({
        ...this.charactersSubject.value,
        characters: response.results!,
      });

      this.searchSubject.next({
        ...this.searchSubject.value,
        total: response.info?.count!,
      });
    });
  }
}
