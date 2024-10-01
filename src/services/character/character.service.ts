import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiResponse, Character } from './character.model';
import { BehaviorSubject } from 'rxjs';

interface SearchState {
  characterName: string;
  page: number;
  total: number;
}
export interface CharactersState {
  characters: Character[];
}

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private readonly CHARACTER_PAGE_API =
    'https://rickandmortyapi.com/api/character/';

  charactersSubject = new BehaviorSubject<CharactersState>({
    characters: [],
  });
  characters = this.charactersSubject.asObservable();

  private searchSubject = new BehaviorSubject<SearchState>({
    characterName: '',
    page: 1,
    total: 0,
  });
  search = this.searchSubject.asObservable();

  private timeoutId: any;
  private currentRequest = new AbortController();

  constructor(private readonly httpClient: HttpClient) {
    if ((this.charactersSubject.value.characters = [])) this.getCharacters();
  }

  updateSearchName(name: string | null) {
    this.searchSubject.next({
      ...this.searchSubject.value,
      characterName: name ? name : '',
      page: name ? 1 : this.searchSubject.value.page,
    });

    clearTimeout(this.timeoutId);

    if (this.currentRequest) {
      this.currentRequest.abort();
    }

    this.timeoutId = setTimeout(() => {
      this.getCharacters();
    }, 300);
  }

  updateSearchPage(pageIndex: number) {
    console.log('pageIndex', pageIndex);
    this.searchSubject.next({
      ...this.searchSubject.value,
      page: pageIndex !== null ? pageIndex + 1 : this.searchSubject.value.page,
    });

    this.getCharacters();
  }

  deleteCharacter(characterId: number) {
    this.charactersSubject.next({
      ...this.charactersSubject.value,
      characters: this.charactersSubject.value.characters.filter(
        (character) => character.id !== characterId
      ),
    });
  }

  addCharacter(character: Character): Character[] {
    this.charactersSubject.value.characters.push(character);

    return this.charactersSubject.value.characters;
  }

  modifyCharacter(modifiedCharacter: Character) {
    const modifiedCharacters = this.charactersSubject.value.characters.map(
      (character) =>
        character.id == modifiedCharacter.id ? modifiedCharacter : character
    );

    this.charactersSubject.next({
      ...this.charactersSubject.value,
      characters: modifiedCharacters,
    });
  }

  getCharacters(): Character[] {
    const response = this.httpClient.get<ApiResponse<Character[]>>(
      this.CHARACTER_PAGE_API +
        '?page=' +
        this.searchSubject.value.page +
        '&name=' +
        this.searchSubject.value.characterName
    );

    response.subscribe((response) => {
      const adaptedCharacters = response.results!.map((character: Character) =>
        character.type ? character : { ...character, type: 'unknown' }
      );
      this.charactersSubject.next({
        ...this.charactersSubject.value,
        characters: adaptedCharacters,
      });

      this.searchSubject.next({
        ...this.searchSubject.value,
        total: response.info?.count!,
      });
    });

    return this.charactersSubject.value.characters;
  }

  getCharacterById(characterId: number): Character {
    const character = this.charactersSubject.value.characters.find(
      (character) => character.id === characterId
    );

    return character!;
  }
}
