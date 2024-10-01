import { TestBed } from '@angular/core/testing';
import { CharacterService, CharactersState } from './character.service';
import { provideHttpClient } from '@angular/common/http';
import {
  addedCharactersMock,
  characterMock,
  charactersMock,
} from '../../mocks/character.mock';

describe('CharacterService', () => {
  let service: CharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(CharacterService);
    service.charactersSubject.value.characters = charactersMock;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all characters correctly', () => {
    const result = service.getCharacters();
    expect(result).toBe(charactersMock);
  });

  it('should add a new character correctly', () => {
    const result = service.addCharacter(characterMock);
    expect(result).toEqual(addedCharactersMock);
  });

  it('should return a character by its Id correctly', () => {
    const result = service.getCharacterById(33);
    expect(result).toEqual(characterMock);
  });
});
