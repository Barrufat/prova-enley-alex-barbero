import { Character } from './character.model';

export interface SearchState {
  characterName: string;
  page: number;
  total: number;
}
export interface CharactersState {
  characters: Character[];
  character: Character;
}
