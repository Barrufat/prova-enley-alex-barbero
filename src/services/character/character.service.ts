import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiResponse, Character } from '../../models/character.model';
import { BehaviorSubject } from 'rxjs';
import {
  CharactersState,
  SearchState,
} from '../../models/character-manager.model';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private readonly CHARACTER_PAGE_API = environment.apiUrl;

  charactersSubject = new BehaviorSubject<CharactersState>({
    characters: [],
    character: {
      episode: [],
      gender: '',
      id: 0,
      image: '',
      name: '',
      species: '',
      status: '',
      type: '',
    },
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

  constructor(
    private readonly httpClient: HttpClient,
    private readonly router: Router
  ) {
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

  addCharacter(character: Omit<Character, 'id'>): Character[] {
    const newCharacter = { ...character, id: this.getRandomId(3) };
    this.charactersSubject.value.characters.push(newCharacter);

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

  getCharacterById(characterId: number) {
    //Donat que no tenim persisténcia del back-end per als personatges que creem en run-time,
    //s'ha optat per cercar el personatge primer a la memória (store) i, en cas de no hi ser-hi, realitzem la petició
    //a la API, d'aquesta manera optimitzem el rendiment (ja minimitzem les peticions a API) i podem accedir a les
    //pagines de detall i modificar dels personatges creats sense problema.

    const character = this.charactersSubject.value.characters.find(
      (character) => character.id === characterId
    );

    this.charactersSubject.next({
      ...this.charactersSubject.value,
      character: character!,
    });

    if (character === undefined) {
      const response = this.httpClient.get<Character>(
        this.CHARACTER_PAGE_API + characterId
      );

      response.subscribe((characterData) => {
        this.charactersSubject.next({
          ...this.charactersSubject.value,
          character: characterData,
        });
      });
    }
  }

  getRandomId(digits: number) {
    if (digits <= 0) {
      throw new Error('El número de dígitos debe ser mayor que 0');
    }
    const min = Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
