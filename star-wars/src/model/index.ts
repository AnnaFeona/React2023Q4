import { Dispatch } from 'react';

/* eslint-disable no-unused-vars */
export type Callback<T = unknown, K = void> = (data?: T) => K;

export interface StateCall<T> {
  value: T;
  setValue?: Dispatch<React.SetStateAction<T>>;
}

export interface Beer {
  id: number;
  name: string;
  description: string;
  image_url: string;
  brewers_tips: string;
  contributed_by: string;
  tagline: string;
  first_brewed: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: {
    value: number;
    unit: string;
  };
  boil_volume: {
    value: number;
    unit: string;
  };
  method: {
    mash_temp: [
      {
        temp: {
          value: number;
          unit: string;
        };
        duration: number;
      },
    ];
    fermentation: {
      temp: {
        value: number;
        unit: string;
      };
    };
    twist: null;
  };
  ingredients: {
    malt: [
      {
        name: string;
        amount: {
          value: number;
          unit: string;
        };
      },
      {
        name: string;
        amount: {
          value: number;
          unit: string;
        };
      },
    ];
    hops: [
      {
        name: string;
        amount: {
          value: number;
          unit: string;
        };
        add: string;
        attribute: string;
      },
      {
        name: string;
        amount: {
          value: number;
          unit: string;
        };
        add: string;
        attribute: string;
      },
      {
        name: string;
        amount: {
          value: number;
          unit: string;
        };
        add: string;
        attribute: string;
      },
    ];
    yeast: string;
  };
  food_pairing: string[];
}
