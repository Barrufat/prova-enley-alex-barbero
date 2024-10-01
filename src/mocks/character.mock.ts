import { Character } from '../services/character/character.model';

export const characterMock: Character = {
  episode: [],
  gender: 'unknown',
  id: 33,
  image: 'unknown',
  name: 'Test Character',
  species: 'unknown',
  status: 'unknown',
  type: 'unknown',
};

export const charactersMock: Character[] = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: 'unknown',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [],
  },
  {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: 'unknown',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    episode: [],
  },
  {
    id: 3,
    name: 'Summer Smith',
    status: 'Alive',
    species: 'Human',
    type: 'unknown',
    gender: 'Female',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    episode: [],
  },
];

export const addedCharactersMock: Character[] = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: 'unknown',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [],
  },
  {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: 'unknown',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    episode: [],
  },
  {
    id: 3,
    name: 'Summer Smith',
    status: 'Alive',
    species: 'Human',
    type: 'unknown',
    gender: 'Female',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    episode: [],
  },
  {
    episode: [],
    gender: 'unknown',
    id: 33,
    image: 'unknown',
    name: 'Test Character',
    species: 'unknown',
    status: 'unknown',
    type: 'unknown',
  },
];
