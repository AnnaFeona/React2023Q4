import { Beer } from '../model';

export const mockBeerList: Beer[] = [
  {
    id: 4,
    name: 'Pilsen Lager',
    tagline: 'Unleash the Yeast Series.',
    first_brewed: '09/2013',
    description:
      'Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Pilsner yeast ferments with no fruity esters or spicy phenols, although it can add a hint of butterscotch.',
    image_url: 'https://images.punkapi.com/v2/4.png',
    abv: 6.3,
    ibu: 55,
    target_fg: 1012,
    target_og: 1060,
    ebc: 30,
    srm: 15,
    ph: 4.4,
    attenuation_level: 80,
    volume: {
      value: 20,
      unit: 'litres',
    },
    boil_volume: {
      value: 25,
      unit: 'litres',
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius',
          },
          duration: null,
        },
      ],
      fermentation: {
        temp: {
          value: 9,
          unit: 'celsius',
        },
      },
      twist: null,
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 4.58,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.25,
            unit: 'kilograms',
          },
        },
        {
          name: 'Dark Crystal',
          amount: {
            value: 0.06,
            unit: 'kilograms',
          },
        },
        {
          name: 'Munich',
          amount: {
            value: 0.25,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Centennial',
          amount: {
            value: 5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Centennial',
          amount: {
            value: 10,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 10,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Centennial',
          amount: {
            value: 17.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 17.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 2007 - Pilsen Lager™',
    },
    food_pairing: ['Spicy crab cakes', 'Spicy cucumber and carrot Thai salad', 'Sweet filled dumplings'],
    brewers_tips:
      'Play around with the fermentation temperature to get the best flavour profile from the individual yeasts.',
    contributed_by: 'Ali Skinner <AliSkinner>',
  },
  {
    id: 111,
    name: 'Vagabond Pilsner',
    tagline: 'Hoppy Pilsner.',
    first_brewed: '02/2013',
    description:
      'Take the thirst-quenching crispness of a German Pilsner and combine it with lemon and honey to produce a rewarding modern twist on a beer classic.',
    image_url: 'https://images.punkapi.com/v2/111.png',
    abv: 4.5,
    ibu: 55,
    target_fg: 1012,
    target_og: 1046,
    ebc: 25,
    srm: 12.5,
    ph: 4.4,
    attenuation_level: 73.9,
    volume: {
      value: 20,
      unit: 'litres',
    },
    boil_volume: {
      value: 25,
      unit: 'litres',
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius',
          },
          duration: 75,
        },
      ],
      fermentation: {
        temp: {
          value: 9,
          unit: 'celsius',
        },
      },
      twist: null,
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 3.5,
            unit: 'kilograms',
          },
        },
        {
          name: 'Munich',
          amount: {
            value: 0.44,
            unit: 'kilograms',
          },
        },
        {
          name: 'Crystal 150',
          amount: {
            value: 0.13,
            unit: 'kilograms',
          },
        },
        {
          name: 'Acidulated Malt',
          amount: {
            value: 0.63,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Cascade',
          amount: {
            value: 6.25,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 6.25,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Centennial',
          amount: {
            value: 5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Chinook',
          amount: {
            value: 5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Cascade',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Centennial',
          amount: {
            value: 7.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Chinook',
          amount: {
            value: 7.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 2007 - Pilsen Lager™',
    },
    food_pairing: [
      'Jamaican jerk chicken',
      'Hot dog with grilled onions and spicy ketchup',
      'Shortbread and raspberry jam thumbprint cookie',
    ],
    brewers_tips:
      'The addition of the acidulated malt tweaks the pH down to aid the yeast fermentation, and helps to creates the crisp lager bite. Be careful not to use more than 10% in any grist, it will turn your mash into jelly!',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 301,
    name: 'Small Batch: Dry-hopped Pilsner',
    tagline: 'Dry-hopped lager.',
    first_brewed: '2018',
    description:
      "A BrewDog bar exclusive draft lager, brewed with Weihenstephan's lager yeast, and dry-hopped with the contemporary German variety Saphir; this lager has been lightly centrifuged and packaged at just under 28 days in tank.",
    image_url: 'https://images.punkapi.com/v2/keg.png',
    abv: 4.7,
    ibu: 37,
    target_fg: 1006,
    target_og: 1042,
    ebc: 5,
    srm: 3,
    ph: 4.4,
    attenuation_level: 86,
    volume: {
      value: 20,
      unit: 'litres',
    },
    boil_volume: {
      value: 25,
      unit: 'litres',
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 65,
            unit: 'celsius',
          },
          duration: 50,
        },
      ],
      fermentation: {
        temp: {
          value: 11,
          unit: 'celsius',
        },
      },
      twist: null,
    },
    ingredients: {
      malt: [
        {
          name: 'Pilsner',
          amount: {
            value: 3.36,
            unit: 'kilograms',
          },
        },
        {
          name: 'Carapils',
          amount: {
            value: 0.24,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Magnum',
          amount: {
            value: 12,
            unit: 'grams',
          },
          add: '70',
          attribute: 'Bittering',
        },
        {
          name: 'Spalter',
          amount: {
            value: 15,
            unit: 'grams',
          },
          add: '30',
          attribute: 'Flavour',
        },
        {
          name: 'Spalter',
          amount: {
            value: 15,
            unit: 'grams',
          },
          add: '10',
          attribute: 'Flavour',
        },
        {
          name: 'Saphire',
          amount: {
            value: 30,
            unit: 'grams',
          },
          add: '0',
          attribute: 'Aroma',
        },
        {
          name: 'Saphire',
          amount: {
            value: 30,
            unit: 'grams',
          },
          add: 'Dry Hop',
          attribute: 'Aroma',
        },
      ],
      yeast: 'Saflager W-34/70',
    },
    food_pairing: ['Grilled salmon tacos', 'Chicken and pesto pasta', 'Ham and mustard crisps'],
    brewers_tips:
      'Before dry hopping, if you aren\'t happy with the "green" beer, drink it (or dump it) and make a new one to avoid wasting your premium hops on something flawed.',
    contributed_by: 'John Jenkman <johnjenkman>',
  },
];
