/* eslint-disable no-unused-vars */
export type Callback<T = unknown, K = void> = (data?: T) => K;

export enum SwapiURL {
  films = "https://swapi.dev/api/films/",
  people = "https://swapi.dev/api/people/",
  planets = "https://swapi.dev/api/planets/",
  species = "https://swapi.dev/api/species/",
  starships = "https://swapi.dev/api/starships/",
  vehicles = "https://swapi.dev/api/vehicles/"
}

enum Gender {
  male = "Male",
  female = "Female",
  n_a = "n/a",
  unknown = "unknown"
}

export interface Person {
  birth_year: string,
  eye_color: string,
  films: string[]
  gender: Gender,
  hair_color: string,
  height: number,
  homeworld: string,
  mass: number,
  name: string,
  skin_color: string,
  created: string,
  edited: string,
  species: string[],
  starships: string[]
  url: string,
  vehicles: string[]
}
