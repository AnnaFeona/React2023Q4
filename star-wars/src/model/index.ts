/* eslint-disable no-unused-vars */
export type Callback<T = unknown, K = void> = (data?: T) => K;

// export enum SwapiURL {
//   films = 'https://swapi.dev/api/films/',
//   people = 'https://swapi.dev/api/people/',
//   planets = 'https://swapi.dev/api/planets/',
//   species = 'https://swapi.dev/api/species/',
//   starships = 'https://swapi.dev/api/starships/',
//   vehicles = 'https://swapi.dev/api/vehicles/',
// }

// type Gender = 'male' | 'female' | 'n/a' | 'unknown';

export interface Beer {
  id: number;
  name: string;
  description: string;
  image_url: string;
  brewers_tips: string;
  contributed_by: string;
  tagline: "Bloggers' Imperial Pilsner.";
  first_brewed: '02/2011';
  abv: 7.2;
  ibu: 59;
  target_fg: 1027;
  target_og: 1069;
  ebc: 10;
  srm: 5;
  ph: 4.4;
  attenuation_level: 67;
  volume: {
    value: 20;
    unit: 'litres';
  };
  boil_volume: {
    value: 25;
    unit: 'litres';
  };
  method: {
    mash_temp: [
      {
        temp: {
          value: 66;
          unit: 'celsius';
        };
        duration: 70;
      },
    ];
    fermentation: {
      temp: {
        value: 10;
        unit: 'celsius';
      };
    };
    twist: null;
  };
  ingredients: {
    malt: [
      {
        name: 'Lager Malt';
        amount: {
          value: 6.63;
          unit: 'kilograms';
        };
      },
      {
        name: 'Wheat';
        amount: {
          value: 0.38;
          unit: 'kilograms';
        };
      },
    ];
    hops: [
      {
        name: 'Saaz';
        amount: {
          value: 60;
          unit: 'grams';
        };
        add: 'start';
        attribute: 'bitter';
      },
      {
        name: 'Saaz';
        amount: {
          value: 60;
          unit: 'grams';
        };
        add: 'middle';
        attribute: 'flavour';
      },
      {
        name: 'Saaz';
        amount: {
          value: 60;
          unit: 'grams';
        };
        add: 'end';
        attribute: 'flavour';
      },
    ];
    yeast: 'Wyeast 2007 - Pilsen Lager™';
  };
  food_pairing: [
    'Vietnamese squid salad',
    'Chargrilled corn on the cob with paprika butter',
    'Strawberry and rhubarb pie',
  ];
}

// export interface SwapiSearch<T> {
//   count: number;
//   next: string | null;
//   previous: string | null;
//   results: T[];
// }
