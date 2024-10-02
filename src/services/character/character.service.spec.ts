import { TestBed } from '@angular/core/testing';
import { CharacterService } from './character.service';
import { provideHttpClient } from '@angular/common/http';
import {
  charactersMock,
  modifiedCharacterMock,
  modifiedCharactersMock,
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

  it('should modify a character correctly', () => {
    const result = service.modifyCharacter(modifiedCharacterMock);
    expect(service.charactersSubject.value.characters).toEqual(
      modifiedCharactersMock
    );
  });

  it('should return a character by its Id correctly', () => {
    service.getCharacterById(1);
    const expectedCharacter = charactersMock[0];
    expect(service.charactersSubject.value.character).toBe(expectedCharacter);
  });
});
