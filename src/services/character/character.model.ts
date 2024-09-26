interface DetailedData {
  name: string;
  url: string;
}

export interface ApiResponse<T> {
  info?: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results?: T;
}

export interface ResourceBase {
  id: number;
  name: string;
  url: string;
  created: string;
}

export interface Character extends ResourceBase {
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: DetailedData;
  location: DetailedData;
  image: string;
  episode: string[];
}
