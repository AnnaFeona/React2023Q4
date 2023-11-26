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

export const allBeers: Beer[] = [
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
    id: 11,
    name: 'Misspent Youth',
    tagline: 'Milk & Honey Scotch Ale.',
    first_brewed: '04/2013',
    description:
      'The brainchild of our small batch brewer, George Woods. A dangerously drinkable milk sugar- infused Scotch Ale.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    abv: 7.3,
    ibu: 30,
    target_fg: 1020,
    target_og: 1079,
    ebc: 120,
    srm: 60,
    ph: 4.4,
    attenuation_level: 74.7,
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
            value: 67,
            unit: 'celsius',
          },
          duration: 75,
        },
      ],
      fermentation: {
        temp: {
          value: 19,
          unit: 'celsius',
        },
      },
      twist: 'See honey and lactose additions',
    },
    ingredients: {
      malt: [
        {
          name: 'Pale Ale',
          amount: {
            value: 2.18,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.3,
            unit: 'kilograms',
          },
        },
        {
          name: 'Dark Crystal',
          amount: {
            value: 0.3,
            unit: 'kilograms',
          },
        },
        {
          name: 'Smoked Weyermann',
          amount: {
            value: 1.8,
            unit: 'kilograms',
          },
        },
        {
          name: 'Flaked Oats',
          amount: {
            value: 0.6,
            unit: 'kilograms',
          },
        },
        {
          name: 'Brown',
          amount: {
            value: 0.6,
            unit: 'kilograms',
          },
        },
        {
          name: 'Amber',
          amount: {
            value: 0.1,
            unit: 'kilograms',
          },
        },
        {
          name: 'Chocolate',
          amount: {
            value: 0.05,
            unit: 'kilograms',
          },
        },
        {
          name: 'Munich',
          amount: {
            value: 0.6,
            unit: 'kilograms',
          },
        },
        {
          name: 'Crystal 150',
          amount: {
            value: 0.2,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'First Gold',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Fuggles',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Honey',
          amount: {
            value: 250,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'Flavour',
        },
        {
          name: 'Lactose',
          amount: {
            value: 375,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'Flavour',
        },
        {
          name: 'First Gold',
          amount: {
            value: 10,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'aroma',
        },
        {
          name: 'Fuggles',
          amount: {
            value: 10,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: [
      'Roasted garlic and chilli infused camembert cheese',
      'Korean style chicken wings',
      'Chocolate milk shake',
    ],
    brewers_tips:
      'Lots of malt in this one. Mash-in in stages, and spread the pale ale malt throughout the mash to provide stability. If the mash starts to sink, stop, wait a few minutes while mixing, then start again.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 14,
    name: 'Alpha Dog',
    tagline: 'Existential Red Ale.',
    first_brewed: '02/2010',
    description:
      'A fusion of caramel malt flavours and punchy New Zealand hops. A session beer you can get your teeth into.',
    image_url: 'https://images.punkapi.com/v2/14.png',
    abv: 4.5,
    ibu: 42,
    target_fg: 1025,
    target_og: 1046,
    ebc: 62,
    srm: 31,
    ph: 4.4,
    attenuation_level: 72.8,
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
          duration: 25,
        },
      ],
      fermentation: {
        temp: {
          value: 22,
          unit: 'celsius',
        },
      },
      twist: null,
    },
    ingredients: {
      malt: [
        {
          name: 'Maris Otter Extra Pale',
          amount: {
            value: 2.5,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 1.25,
            unit: 'kilograms',
          },
        },
        {
          name: 'Munich',
          amount: {
            value: 0.61,
            unit: 'kilograms',
          },
        },
        {
          name: 'Crystal 150',
          amount: {
            value: 0.28,
            unit: 'kilograms',
          },
        },
        {
          name: 'Dark Crystal 350-400',
          amount: {
            value: 0.2,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Nelson Sauvin',
          amount: {
            value: 15,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 10,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Nelson Sauvin',
          amount: {
            value: 30,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: [
      'Pastrami',
      'Swiss and horseradish sandwich',
      'Sharp cheddar cheese and onion/ raisin chutney',
      'Peanut brittle',
    ],
    brewers_tips:
      'Crush the malt as close to brewing time as possible. The fresher the malt, the more intense caramel flavours will be released in the wort.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 15,
    name: 'Mixtape 8',
    tagline: 'An Epic Fusion Of Old Belgian, American New Wave, And Scotch Whisky.',
    first_brewed: '01/2012',
    description:
      'This recipe is for the Belgian Tripel base. A blend of two huge oak aged beers – half a hopped up Belgian Tripel, and half a Triple India Pale Ale. Both aged in single grain whisky barrels for two years and blended, each beer brings its own character to the mix. The Belgian Tripel comes loaded with complex spicy, fruity esters, and punchy citrus hop character.',
    image_url: 'https://images.punkapi.com/v2/15.png',
    abv: 14.5,
    ibu: 50,
    target_fg: 1014,
    target_og: 1093,
    ebc: 40,
    srm: 20,
    ph: 4.4,
    attenuation_level: 85,
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
          duration: 40,
        },
      ],
      fermentation: {
        temp: {
          value: 21,
          unit: 'celsius',
        },
      },
      twist: 'Barrel aged and blended with Anarchist Alchemist',
    },
    ingredients: {
      malt: [
        {
          name: 'Pale Ale - Tipple',
          amount: {
            value: 11.1,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.94,
            unit: 'kilograms',
          },
        },
        {
          name: 'Crystal',
          amount: {
            value: 0.44,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Columbus Extract',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Centennial',
          amount: {
            value: 37.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Cascade',
          amount: {
            value: 37.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 37.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 3522 - Belgian Ardennes™',
    },
    food_pairing: [
      'Coriander & chilli crab cakes',
      'Goats cheese salad with walnuts, radish and blood orange',
      'Pistachio cake',
    ],
    brewers_tips: "Brew twice as much Belgian Tripel as you were planning on ageing - it's awesome on its own too!",
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 16,
    name: 'Libertine Porter',
    tagline: 'Dry-Hopped Aggressive Porter.',
    first_brewed: '01/2012',
    description:
      'An avalanche of cross-continental hop varieties give this porter a complex spicy, resinous and citrusy aroma, with a huge malt bill providing a complex roasty counterpoint. Digging deeper into the flavour draws out cinder toffee, bitter chocolate and hints of woodsmoke.',
    image_url: 'https://images.punkapi.com/v2/16.png',
    abv: 6.1,
    ibu: 45,
    target_fg: 1020,
    target_og: 1067,
    ebc: 219,
    srm: 109.5,
    ph: 4.4,
    attenuation_level: 70.1,
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
            value: 68,
            unit: 'celsius',
          },
          duration: 35,
        },
      ],
      fermentation: {
        temp: {
          value: 18,
          unit: 'celsius',
        },
      },
      twist: null,
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale - Spring Blend',
          amount: {
            value: 5,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 1.25,
            unit: 'kilograms',
          },
        },
        {
          name: 'Crystal 150',
          amount: {
            value: 0.63,
            unit: 'kilograms',
          },
        },
        {
          name: 'Chocolate',
          amount: {
            value: 0.63,
            unit: 'kilograms',
          },
        },
        {
          name: 'Roasted Barley',
          amount: {
            value: 0.63,
            unit: 'kilograms',
          },
        },
        {
          name: 'Wheat',
          amount: {
            value: 0.31,
            unit: 'kilograms',
          },
        },
        {
          name: 'Flaked Oats',
          amount: {
            value: 0.31,
            unit: 'kilograms',
          },
        },
        {
          name: 'Smoked Malt',
          amount: {
            value: 0.06,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Columbus',
          amount: {
            value: 31.25,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Columbus',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'bitter',
        },
        {
          name: 'Willamette',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Galena',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Columbus',
          amount: {
            value: 75,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Galena',
          amount: {
            value: 75,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 100,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: ['Blue cheese beef burger', 'Glazed short ribs', 'Chocolate cake'],
    brewers_tips:
      'Mash in at a higher temperature to leave more unfermentable sugars in the wort. This gives the beer a sweeter porter profile.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 18,
    name: 'Russian Doll – India Pale Ale',
    tagline: 'Nesting Hop Bomb.',
    first_brewed: '08/2014',
    description:
      'The levels of hops vary throughout the range. We love hops, so all four beers are big, bitter badasses, but by tweaking the amount of each hop used later in the boil and during dry- hopping, we can balance the malty backbone with some unexpected flavours. Simcoe is used in the whirlpool for all four beers, and yet still lends different characters to each',
    image_url: 'https://images.punkapi.com/v2/18.png',
    abv: 6,
    ibu: 70,
    target_fg: 1012,
    target_og: 1058,
    ebc: 25,
    srm: 12.5,
    ph: 5.2,
    attenuation_level: 79.3,
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
          value: 19,
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
            value: 5.06,
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
      ],
      hops: [
        {
          name: 'Cascade',
          amount: {
            value: 2.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Centennial',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 17.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 17.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Citra',
          amount: {
            value: 17.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 75,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Cascade',
          amount: {
            value: 75,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Centennial',
          amount: {
            value: 75,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Citra',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: ['Spicy chicken skewers', 'Fish tacos with hot sauce', 'Lemon pound cake with a ice sugar glaze'],
    brewers_tips: 'Create balance through experimentation with the hop amounts and malt backbone.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 25,
    name: 'Bad Pixie',
    tagline: 'Spiced Wheat Beer.',
    first_brewed: '10/2008',
    description: '2008 Prototype beer, a 4.7% wheat ale with crushed juniper berries and citrus peel.',
    image_url: 'https://images.punkapi.com/v2/25.png',
    abv: 4.7,
    ibu: 45,
    target_fg: 1010,
    target_og: 1047,
    ebc: 8,
    srm: 4,
    ph: 4.4,
    attenuation_level: 79,
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
            value: 67,
            unit: 'celsius',
          },
          duration: 75,
        },
      ],
      fermentation: {
        temp: {
          value: 19,
          unit: 'celsius',
        },
      },
      twist: 'Crushed juniper berries: 12.5g, Lemon peel: 18.8g',
    },
    ingredients: {
      malt: [
        {
          name: 'Wheat',
          amount: {
            value: 2.5,
            unit: 'kilograms',
          },
        },
        {
          name: 'Extra Pale',
          amount: {
            value: 2.06,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'First Gold',
          amount: {
            value: 18.75,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'First Gold',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Sorachi Ace',
          amount: {
            value: 16.25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: ['Poached sole fillet with capers', 'Summer fruit salad', 'Banana split'],
    brewers_tips:
      'Make sure you have plenty of room in the fermenter. Beers containing wheat can often foam aggressively during fermentation.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 30,
    name: 'Dana - IPA Is Dead',
    tagline: 'Single Hop India Pale Ale.',
    first_brewed: '02/2013',
    description:
      'Hailing from Slovenia, Dana was originally cross bred from the German Hallertau Magnum and native Slovenian varieties. Like any good faux noble hop should, it infuses a rustic, musty spiciness into a toasty beast of a malt base.',
    image_url: 'https://images.punkapi.com/v2/30.png',
    abv: 6.7,
    ibu: 70,
    target_fg: 1015,
    target_og: 1066,
    ebc: 30,
    srm: 15,
    ph: 4.4,
    attenuation_level: 77.3,
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
          value: 19,
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
            value: 5,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.31,
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
            value: 0.31,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Dana',
          amount: {
            value: 2.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Dana',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Dana',
          amount: {
            value: 37.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Dana',
          amount: {
            value: 125,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: ['Spicy Asian-style noodles', 'Smokey chipotle beef brisket tostada', 'Sweet potato pie'],
    brewers_tips:
      'Noble hops (and their offspring) have a fundamentally different profile to many other hops, down to their different oil fractions. Chill your hops to retain all of the spicy, delicate volatile hop oils!',
    contributed_by: 'Matt Ball <GeordieMatt>',
  },
  {
    id: 35,
    name: 'Berliner Weisse With Raspberries And Rhubarb - B-Sides',
    tagline: 'Fruity Berliner Weisse.',
    first_brewed: '11/2015',
    description: 'Tart, dry and acidic with a punch of summer berry as rhubarb crumble.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    abv: 3.6,
    ibu: 8,
    target_fg: 1007,
    target_og: 1040,
    ebc: null,
    srm: null,
    ph: 3.2,
    attenuation_level: 83,
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
            value: 60,
            unit: 'celsius',
          },
          duration: 10,
        },
        {
          temp: {
            value: 65,
            unit: 'celsius',
          },
          duration: 30,
        },
        {
          temp: {
            value: 72,
            unit: 'celsius',
          },
          duration: 10,
        },
        {
          temp: {
            value: 78,
            unit: 'celsius',
          },
          duration: 5,
        },
      ],
      fermentation: {
        temp: {
          value: 21,
          unit: 'celsius',
        },
      },
      twist:
        'Raspberries in the boil, rhubarb at maturation. Soured naturally using the kettle souring technique, Raspberries at middle',
    },
    ingredients: {
      malt: [
        {
          name: 'Propino Pale Malt',
          amount: {
            value: 1.63,
            unit: 'kilograms',
          },
        },
        {
          name: 'Wheat Malt',
          amount: {
            value: 1.63,
            unit: 'kilograms',
          },
        },
        {
          name: 'Propino Pale Malt for kettle souring',
          amount: {
            value: 0.03,
            unit: 'kilograms',
          },
        },
        {
          name: 'Acidulated Malt for kettle souring',
          amount: {
            value: 0.03,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Bramling Cross',
          amount: {
            value: 10,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'bitter',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: ['Grilled salmon', 'Mac and cheese fries', 'Cheesecake with raspberry coulis'],
    brewers_tips:
      'Fruits added at the end of the boil for 10 mins and additional added in maturation. Boil for no more than 15 mins.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 36,
    name: 'Shipwrecker Circus (w/ Oskar Blues)',
    tagline: 'American Barley Wine - Oskar Blues Collab.',
    first_brewed: '09/2013',
    description:
      'In collaboration with the awesome Oskar Blues from Colorado, we created this big, twisted 10.5% American style barley wine. Big boozy aromas and a sweet viscosity, packed in with some heavy-hitting C-hops, for an intense bitterness to balance this full-bodied malt monster.',
    image_url: 'https://images.punkapi.com/v2/36.png',
    abv: 10.5,
    ibu: 85,
    target_fg: 1022,
    target_og: 1102,
    ebc: 64,
    srm: 32,
    ph: 4.4,
    attenuation_level: 102,
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
          value: 21,
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
            value: 9.35,
            unit: 'kilograms',
          },
        },
        {
          name: 'Munich',
          amount: {
            value: 0.63,
            unit: 'kilograms',
          },
        },
        {
          name: 'Crystal 150',
          amount: {
            value: 1,
            unit: 'kilograms',
          },
        },
        {
          name: 'Chocolate',
          amount: {
            value: 0.06,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Chinook',
          amount: {
            value: 50,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Cascade',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Citra',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Chinook',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Chinook',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Citra',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Cascade',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Cascade',
          amount: {
            value: 125,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Chinook',
          amount: {
            value: 125,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Citra',
          amount: {
            value: 125,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1272 - American Ale II™',
    },
    food_pairing: ['Stilton', 'Pan seared steak', 'Dark Chocolate Fondant'],
    brewers_tips: 'Age this beer in the cellar for a few months to allow the warm alcohol flavours to reduce.',
    contributed_by: 'Ali Skinner <AliSkinner>',
  },
  {
    id: 37,
    name: 'Zephyr',
    tagline: 'There’s A Storm Brewing.',
    first_brewed: '10/2008',
    description:
      'A 9.2% Double IPA aged for 21 months in a 1965 Invergordon cask with 30 kg of fresh highland strawberries. This beer is a riot of whisky, caramel and strawberry, all tempered by a toe curling bitterness enducing rapture in all who taste it. Who needs champagne?',
    image_url: 'https://images.punkapi.com/v2/37.png',
    abv: 12.5,
    ibu: 125,
    target_fg: 1016,
    target_og: 1087,
    ebc: 40,
    srm: 20,
    ph: 4.4,
    attenuation_level: 81.2,
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
          value: 21,
          unit: 'celsius',
        },
      },
      twist: 'Oak chips: 15g, Fresh strawberries: 3kg',
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 6.3,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.38,
            unit: 'kilograms',
          },
        },
        {
          name: 'Crystal 150',
          amount: {
            value: 0.29,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Columbus Extract',
          amount: {
            value: 31,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Columbus',
          amount: {
            value: 19.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Columbus',
          amount: {
            value: 19.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Centennial',
          amount: {
            value: 19.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 19.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Columbus',
          amount: {
            value: 19.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Centennial',
          amount: {
            value: 19.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Centennial',
          amount: {
            value: 115.5,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Columbus',
          amount: {
            value: 96,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 96,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 77,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1272 - American Ale II™',
    },
    food_pairing: ['Poached eggs and smoked salmon', 'Salt and pepper squid', 'Key Lime Pie'],
    brewers_tips:
      'Rack into a secondary fermenter and add your strawberries. Use a blow-off rather than an airlock as the fermentation can get pretty wild as the yeast starts using the sugar from the strawberries.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 38,
    name: 'Belgian Trappist',
    tagline: 'Unleash the Yeast Series.',
    first_brewed: '09/2013',
    description:
      'Our Unleash the Yeast series was an epic experiment into the differences in aroma and flavour provided by switching up your yeast. We brewed up a wort with a light caramel note and some toasty biscuit flavour, and hopped it with Amarillo and Centennial for a citrusy bitterness. Everything else is down to the yeast. Abbey style yeasts add distinctive spicy and fruity notes, and dry out the finished beer.',
    image_url: 'https://images.punkapi.com/v2/38.png',
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
          value: 25,
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
      yeast: 'WLP500 - Monastery Ale',
    },
    food_pairing: ['Roast beef with spicy jus', 'Ginger bread cookies', 'Orange tart'],
    brewers_tips:
      'Play around with the fermentation temperature to get the best flavour profile from the individual yeasts.',
    contributed_by: 'Ali Skinner <AliSkinner>',
  },
  {
    id: 39,
    name: 'Kohatu - IPA Is Dead',
    tagline: 'Single Hop India Pale Ale.',
    first_brewed: '02/2014',
    description:
      'As you’d expect from a New Zealand hop variety, Kohatu contributes bags of tropical fruit, but with loads of lime notes, & pineapple hits. Seriously fruity, with sweet, juicy melon and stonefruit notes.',
    image_url: 'https://images.punkapi.com/v2/39.png',
    abv: 7.2,
    ibu: 70,
    target_fg: 1012,
    target_og: 1067,
    ebc: 30,
    srm: 15,
    ph: 4.4,
    attenuation_level: 82.1,
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
          value: 19,
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
            value: 5.65,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.31,
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
      ],
      hops: [
        {
          name: 'Kohatu',
          amount: {
            value: 37.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Kohatu',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Kohatu',
          amount: {
            value: 37.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Kohatu',
          amount: {
            value: 250,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: ['Tuna sushi roll with spicy mayonnaise sauce', 'Thai green curry', 'Pineapple upside down cake'],
    brewers_tips:
      'New Zealand hops are in short supply - club together with other brewers to try and get hold of some, or ask your local brewery if you can buy small amounts from them.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 42,
    name: 'Hardcore IPA',
    tagline: 'Explicit Imperial Ale. Citrusy. Resinous. Intense.',
    first_brewed: '12/2009',
    description:
      'Pounding a triple payload of the biggest North American hops humanity has devised, braced by a backbone of caramel malt, this beer is deep, astringent and resinous, pushing to the extremes of lupulin thresholds. There’s nothing inscrutable going on; no mystery in the backstory. It doesn’t seek to be understood. A beer incapable of empathy; only hop overload.',
    image_url: 'https://images.punkapi.com/v2/42.png',
    abv: 9.2,
    ibu: 125,
    target_fg: 1016,
    target_og: 1085,
    ebc: 40,
    srm: 20,
    ph: 4.4,
    attenuation_level: 81.2,
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
          value: 21,
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
            value: 7.4,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.38,
            unit: 'kilograms',
          },
        },
        {
          name: 'Crystal 150',
          amount: {
            value: 0.29,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Columbus Extract',
          amount: {
            value: 30.8,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Columbus',
          amount: {
            value: 19.2,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Columbus',
          amount: {
            value: 19.2,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Centennial',
          amount: {
            value: 19.2,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 19.2,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Columbus',
          amount: {
            value: 19.2,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Centennial',
          amount: {
            value: 19.2,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 19.2,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Centennial',
          amount: {
            value: 115.4,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Columbus',
          amount: {
            value: 96.2,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 96.2,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 76.9,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1272 - American Ale II™',
    },
    food_pairing: [
      'Spicy wings with blue cheese dip',
      'Pan seared scallops with a chilli sauce',
      'Creamy chocolate and caramel cheesecake',
    ],
    brewers_tips:
      'There are so much hops in this beer it may break your gear! Watch out for the end of casting (or knockout for our American brethern), you don’t want to pull too much trub into the fermenter.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 45,
    name: 'The Physics',
    tagline: 'Laid Back Amber Beer.',
    first_brewed: '04/2007',
    description:
      "A hoppy Amber Ale that won World's Best Amber Beer in the World Beer Awards 2007. Malt and hops are in perfect harmony in this incredibly balanced beer. Biscuity, bitter and packing a surprisingly hoppy punch, this beer ultimately morphed into 5AM Saint.",
    image_url: 'https://images.punkapi.com/v2/45.png',
    abv: 5,
    ibu: 47,
    target_fg: 1010,
    target_og: 1048.5,
    ebc: 65,
    srm: 32.5,
    ph: 4.4,
    attenuation_level: 79.4,
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
          value: 19,
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
            value: 4.06,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.31,
            unit: 'kilograms',
          },
        },
        {
          name: 'Crystal 120',
          amount: {
            value: 0.23,
            unit: 'kilograms',
          },
        },
        {
          name: 'Dark Crystal',
          amount: {
            value: 0.94,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Amarillo',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Bramling Cross',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 50,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: [
      'Barbecue pulled pork on sourdough bread',
      'Roast turkey with a honey and herb marinade and roasted vegetables',
      'Banana walnut loaf with chocolate chips',
    ],
    brewers_tips:
      'Keep the fermentation temperature as close to 19°C as possible. This will ensure the yeast creates a more neutral flavour profile, allowing the hops to really shine through.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 48,
    name: 'Goldings - IPA Is Dead',
    tagline: 'Single Hop India Pale Ale.',
    first_brewed: '02/2013',
    description:
      'This is East Kent Goldings re- invented and re-imagined and shows just what can be done with English hops if you use enough of them. In this amped up Goldings reincarnation expect to be slammed with floral lavender, a fruity riot of blackberries and spiced pears, bubblegum, plums and the illusion of thyme.',
    image_url: 'https://images.punkapi.com/v2/48.png',
    abv: 6.7,
    ibu: 70,
    target_fg: 1015,
    target_og: 1066,
    ebc: 30,
    srm: 15,
    ph: 4.4,
    attenuation_level: 77.3,
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
          value: 19,
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
            value: 5,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.31,
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
            value: 0.31,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Goldings',
          amount: {
            value: 37.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Goldings',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Goldings',
          amount: {
            value: 37.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Goldings',
          amount: {
            value: 125,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: ['Rosemary and thyme marinated venison', 'Fish and chips', 'Lavender chocolate chip cookies'],
    brewers_tips: 'Take a read through each year’s hop harvest that is available. Some years are better than others.',
    contributed_by: 'Matt Ball <GeordieMatt>',
  },
  {
    id: 52,
    name: 'Paradox Islay',
    tagline: 'Ubiquitous Imperial Stout.',
    first_brewed: '04/2007',
    description:
      'In 2006 James and Martin hijacked a beer dinner run by Michael Jackson, the acclaimed beer and whisky writer, and convinced him to taste one of their home brews. This was a defining moment in BrewDog prehistory, and that beer was the first incarnation of the ubiquitous Paradox. Aged in a variety of casks over the years, Paradox is dark, decadent and encapsulating. Can be enjoyed fresh; phenomenal when aged.',
    image_url: 'https://images.punkapi.com/v2/52.png',
    abv: 10,
    ibu: 55,
    target_fg: 1014,
    target_og: 1090,
    ebc: 300,
    srm: 152,
    ph: 4.4,
    attenuation_level: 84.4,
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
          duration: 90,
        },
      ],
      fermentation: {
        temp: {
          value: 21,
          unit: 'celsius',
        },
      },
      twist: 'Try ageing on oak chips, infusing with rum raisins, or vanilla pods',
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 4.5,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.55,
            unit: 'kilograms',
          },
        },
        {
          name: 'Munich',
          amount: {
            value: 0.33,
            unit: 'kilograms',
          },
        },
        {
          name: 'Flaked Oats',
          amount: {
            value: 1.35,
            unit: 'kilograms',
          },
        },
        {
          name: 'Dark Crystal',
          amount: {
            value: 0.55,
            unit: 'kilograms',
          },
        },
        {
          name: 'Carafa Special Malt Type 1',
          amount: {
            value: 0.18,
            unit: 'kilograms',
          },
        },
        {
          name: 'Carafa Special Malt Type 3',
          amount: {
            value: 0.33,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Columbus',
          amount: {
            value: 75,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Columbus',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Saaz',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'First Gold',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 1272 - American Ale II™',
    },
    food_pairing: ['Ancho chilli beef taco', 'Chocolate gateaux', 'Rum poached pears with dark chocolate sauce'],
    brewers_tips:
      'The beauty of this beer is in how brilliantly it lends itself to infusing or ageing. Experiment with different additions when the beer is ageing, taste it regularly to gauge its progress, and make sure you package it at its peak.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 55,
    name: 'Amarillo - IPA Is Dead',
    tagline: 'Single Hop India Pale Ale.',
    first_brewed: '01/2013',
    description:
      'Citrus fruit. Lots of citrus fruit. Think blood orange, orange zest and grapefruit, tangerine and lemon; the fruit is balanced by floral notes in the most classic of new wave IPA hops. Amarillo adds a zesty, pithy character that sits beautifully alongside hints of toffee and honeycomb.',
    image_url: 'https://images.punkapi.com/v2/55.png',
    abv: 7.2,
    ibu: 70,
    target_fg: 1012,
    target_og: 1067,
    ebc: 30,
    srm: 15,
    ph: 4.4,
    attenuation_level: 82.1,
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
          value: 19,
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
            value: 4.88,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.31,
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
      ],
      hops: [
        {
          name: 'Amarillo',
          amount: {
            value: 20,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 37.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 250,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: [
      'Bratwurst sausage with spicy mustard',
      'Fried American bacon with chilli flakes added to the top',
      'Dark chocolate chip cookies',
    ],
    brewers_tips:
      'Use the freshest hops for the most impact. It seems obvious but in a single hop beer, you want the hops to be at their best.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 56,
    name: 'Black Eyed King Imp',
    tagline: 'Barrel-Aged Prototype Cocoa Psycho.',
    first_brewed: '11/2012',
    description:
      "An early Cocoa Psycho recipe that we loved, but didn't fit what we were looking for. We locked this chocolate coffee stout away in barrels for two years, imparting toasted marshmallow, spicy vanilla, molasses and boozy warmth.",
    image_url: 'https://images.punkapi.com/v2/56.png',
    abv: 9.5,
    ibu: 85,
    target_fg: 1022,
    target_og: 1095,
    ebc: 250,
    srm: 125,
    ph: 4.4,
    attenuation_level: 76.8,
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
          value: 18,
          unit: 'celsius',
        },
      },
      twist: 'Coffee Beans: 12.5g at end, Lactose: 125g',
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale - Spring Blend',
          amount: {
            value: 6.25,
            unit: 'kilograms',
          },
        },
        {
          name: 'Wheat',
          amount: {
            value: 1.25,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 1.25,
            unit: 'kilograms',
          },
        },
        {
          name: 'Crystal',
          amount: {
            value: 1.56,
            unit: 'kilograms',
          },
        },
        {
          name: 'Dark Crystal',
          amount: {
            value: 0.63,
            unit: 'kilograms',
          },
        },
        {
          name: 'Amber',
          amount: {
            value: 0.63,
            unit: 'kilograms',
          },
        },
        {
          name: 'Brown',
          amount: {
            value: 0.63,
            unit: 'kilograms',
          },
        },
        {
          name: 'Chocolate',
          amount: {
            value: 0.63,
            unit: 'kilograms',
          },
        },
        {
          name: 'Roasted Barley',
          amount: {
            value: 0.31,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Magnum',
          amount: {
            value: 62.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Willamette',
          amount: {
            value: 31.25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'First Gold',
          amount: {
            value: 31.25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 1272 - American Ale II™',
    },
    food_pairing: ['Beef chilli made with cocoa powder', 'Dark chocolate covered bacon', 'Rich espresso tiramisu'],
    brewers_tips:
      'There is a huge amount of roasted malts in this grist. Be careful not to pulverise the malt into powder during the milling process.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 57,
    name: 'Prototype 27',
    tagline: 'Vibrant Smoky Pink IPA.',
    first_brewed: '04/2010',
    description:
      'Hardcore IPA with raspberries aged in Caol Ila casks. Full-bodied and compelling, the robust malt base provides an initial layer of honey, cinnamon and biscuity malt sweetness. Soon the Scottish berries are in on the act, a dominating tug of war between sweet and tart with an overbearing zest. As the beer slips back across your tongue the hops demand and definitely get your attention. At 100 IBUs the bitterness smashes into the back of your throat as the resinous, spiced orange peel flavours add depth to the berry fruitiness.',
    image_url: 'https://images.punkapi.com/v2/57.png',
    abv: 9.2,
    ibu: 149,
    target_fg: 1014,
    target_og: 1083,
    ebc: 19.5,
    srm: 9.8,
    ph: 4.4,
    attenuation_level: 83,
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
          duration: 90,
        },
      ],
      fermentation: {
        temp: {
          value: 19,
          unit: 'celsius',
        },
      },
      twist: null,
    },
    ingredients: {
      malt: [
        {
          name: 'Pale Ale',
          amount: {
            value: 8.13,
            unit: 'kilograms',
          },
        },
        {
          name: 'Crystal 150',
          amount: {
            value: 0.28,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.56,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Columbus',
          amount: {
            value: 50,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Centennial',
          amount: {
            value: 50,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Columbus',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Centennial',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Columbus',
          amount: {
            value: 37.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Centennial',
          amount: {
            value: 37.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 37.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 1272 - American Ale II™',
    },
    food_pairing: ['Strong blue cheese', 'Cranachan', 'Chicago style hot links'],
    brewers_tips:
      'Soak some oak chips in Caol Ila whisky to get barrel character. Freeze raspberries before adding them to secondary.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 58,
    name: 'Coffee Imperial Stout',
    tagline: 'Beats a Cup of Joe.',
    first_brewed: '11/2008',
    description:
      'This beer was released as both as "Danish Beerhouse Coffee Imperial Stout" and "BrewDog Coffee Imperial Stout". Deep, dark, roasted flavours make this a perfect Sunday brunch beer.',
    image_url: 'https://images.punkapi.com/v2/58.png',
    abv: 9,
    ibu: 65,
    target_fg: 1019,
    target_og: 1080,
    ebc: 97,
    srm: 49,
    ph: 4.4,
    attenuation_level: 76,
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
            value: 64,
            unit: 'celsius',
          },
          duration: 90,
        },
      ],
      fermentation: {
        temp: {
          value: 19,
          unit: 'celsius',
        },
      },
      twist: 'Coffee added after boil. Aged on French oak chips., Dark muscovado sugar: 312.5g for 20mins',
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 7.5,
            unit: 'kilograms',
          },
        },
        {
          name: 'Dark Crystal',
          amount: {
            value: 0.63,
            unit: 'kilograms',
          },
        },
        {
          name: 'Chocolate',
          amount: {
            value: 0.31,
            unit: 'kilograms',
          },
        },
        {
          name: 'Roasted Barley',
          amount: {
            value: 0.31,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Chinook',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Galena',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Galena',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'First Gold',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Coffee',
          amount: {
            value: 9.4,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Coffee',
          amount: {
            value: 9.4,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: ['Gooey chocolate brownies', 'Chicken fried steak with cheesy mash', 'Spicy chicken empanadas'],
    brewers_tips: 'Grind the coffee as if making an espresso to really get the most out of it.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 59,
    name: 'Mandarina Bavaria - IPA Is Dead',
    tagline: 'Single Hop India Pale Ale.',
    first_brewed: '03/2015',
    description:
      'From the central European plains of Germany, comes something very different. A blast of tangerine and orange, Mandarina Bavaria brings a highly distinctive backbone of flavour. This is down to its parent – Cascade – and a frankly enormous 70% myrcene oil content. If equate Germany solely with earthy, spicy Noble hops, Mandarina Bavaria will make you think again.',
    image_url: 'https://images.punkapi.com/v2/59.png',
    abv: 7.2,
    ibu: 100,
    target_fg: 1010,
    target_og: 1064,
    ebc: 12,
    srm: 6,
    ph: 4.4,
    attenuation_level: 84,
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
          value: 19,
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
            value: 6.39,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Mandarina Bavaria',
          amount: {
            value: 41.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Mandarina Bavaria',
          amount: {
            value: 41.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Mandarina Bavaria',
          amount: {
            value: 41.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: ['Lavender and thyme roast beef', 'Spicy kung po chicken', 'Caramel and rose essence cheesecake'],
    brewers_tips:
      "We've mentioned the importance of fresh hops previously but this one really demands that your hops are the absolute freshest.",
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 63,
    name: 'Sunk Punk',
    tagline: 'Ocean Fermented Lager.',
    first_brewed: '09/2011',
    description:
      "It's rumoured just a drop can calm the fiercest of storms. A balance of sweet, salt and savoury, citrus, spruce and caramel. Fermented at the bottom of the North Sea, which just so happens to be the perfect temperature for lagers to ferment.",
    image_url: 'https://images.punkapi.com/v2/63.png',
    abv: 7.1,
    ibu: 68,
    target_fg: 1010,
    target_og: 1056,
    ebc: 14,
    srm: 7,
    ph: 4.4,
    attenuation_level: 82.1,
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
          value: 10,
          unit: 'celsius',
        },
      },
      twist: 'Seabuckthorn: 25g at end, Sea Salt: 20g at middle, Rum: 25ml at end',
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 5.21,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Chinook',
          amount: {
            value: 20,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Ahtanum',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Chinook',
          amount: {
            value: 20,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Ahtanum',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Chinook',
          amount: {
            value: 30,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Ahtanum',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Nelson Sauvin',
          amount: {
            value: 140,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 2007 - Pilsen Lager™',
    },
    food_pairing: ['Salt baked cod with lemon and dill butter', 'Beef, oyster and ale pie', 'Apple and rosemary tart'],
    brewers_tips: 'Keep the fermentation temperature as steady as possible to allow the lager yeast to do its thing.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 64,
    name: 'Sub Hop',
    tagline: 'Hopped-Up Imperial Pilsner.',
    first_brewed: '06/2014',
    description:
      'Brewed for the opening of our first bar in Italy, BrewDog Firenze. A mega-hoppy Imperial Pilsner, with toasty malt complexity and tropical New World hops.',
    image_url: 'https://images.punkapi.com/v2/64.png',
    abv: 8,
    ibu: 35,
    target_fg: 1016,
    target_og: 1077,
    ebc: 15,
    srm: 7.5,
    ph: 4.4,
    attenuation_level: 79.2,
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
            value: 6.25,
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
        {
          name: 'Dextrose',
          amount: {
            value: 0.38,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Saaz',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Hallertauer Mittelfrüh',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Pacifica',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Pacific Jade',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Pacifica',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Pacific Jade',
          amount: {
            value: 75,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Pacifica',
          amount: {
            value: 37.5,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 2007 - Pilsen Lager™',
    },
    food_pairing: ['Seared lemon and herb salmon', 'Crab linguine', 'Almond biscotti'],
    brewers_tips: 'Sit this beer aside for a month to allow it to mellow.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 65,
    name: "Bracken's Porter",
    tagline: 'A Tribute To Our Favourite 4 Pawed Friend.',
    first_brewed: '03/2013',
    description:
      'The beer was named Bracken’s Porter as a tribute to our favourite four pawed friend who sadly passed in 2013. Chocolately, robust, warming, laid back and lots of fun - there are plenty of similarities between the two. Bracken we miss you and we hope you like your beer. Long live the original BrewDog.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    abv: 5,
    ibu: 50,
    target_fg: 1010,
    target_og: 1049,
    ebc: 110,
    srm: 55,
    ph: 4.4,
    attenuation_level: 79,
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
          value: 19,
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
            value: 3.63,
            unit: 'kilograms',
          },
        },
        {
          name: 'Dark Crystal',
          amount: {
            value: 0.19,
            unit: 'kilograms',
          },
        },
        {
          name: 'Roasted Barley',
          amount: {
            value: 0.31,
            unit: 'kilograms',
          },
        },
        {
          name: 'Black Malt',
          amount: {
            value: 0.13,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Vic Secret',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Bramling Cross',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'aroma',
        },
        {
          name: 'Challenger',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: [
      'Grilled vegetable and chicken teriyaki skewers',
      'Chilli covered burger (Sloppy Joe)',
      'Candied bacon topped chocolate cheesecake',
    ],
    brewers_tips: 'Try to replicate London’s highly carbonated water to really emphasise the dark malt profile.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 67,
    name: 'Hunter Foundation Pale Ale',
    tagline: 'American Pale Ale.',
    first_brewed: '05/2012',
    description:
      "This straight-up US style pale ale uses some of our favourite hops against a toasty malt base. We brewed this with Sir Tom Hunter at our Fraserburgh brewery - to add a charitable element to your own version, feel free to share this citrusy pale ale with your friends. Or don't, it's your choice.",
    image_url: 'https://images.punkapi.com/v2/67.png',
    abv: 5.4,
    ibu: 35,
    target_fg: 1008,
    target_og: 1050,
    ebc: 11.5,
    srm: 5.75,
    ph: 4.4,
    attenuation_level: 84,
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
            value: 63,
            unit: 'celsius',
          },
          duration: 75,
        },
      ],
      fermentation: {
        temp: {
          value: 19,
          unit: 'celsius',
        },
      },
      twist: null,
    },
    ingredients: {
      malt: [
        {
          name: 'Maris Otter Extra Pale',
          amount: {
            value: 4.3,
            unit: 'kilograms',
          },
        },
        {
          name: 'Munich',
          amount: {
            value: 0.8,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Amarillo',
          amount: {
            value: 10,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 15,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Citra',
          amount: {
            value: 20,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: [
      'Monterey Jack stuffed grilled jalepenos',
      'Barbecue corn and steak fajita seasoned wrap',
      'Cinnamon & white chocolate churro',
    ],
    brewers_tips:
      'To dry the beer out, mash at a slightly lower temp (62° - 63°C), this will increase the ratio of fermentable sugars in the beer.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 68,
    name: 'Hype',
    tagline: 'New Zealand Pale Ale.',
    first_brewed: '08/2007',
    description:
      'A perfect pale ale showcase for the tropical profile of New Zealand hops and the intense citrus of US hops.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    abv: 4.1,
    ibu: 65,
    target_fg: 1010,
    target_og: 1042,
    ebc: 17,
    srm: 8.5,
    ph: 4.4,
    attenuation_level: 76.2,
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
          value: 19,
          unit: 'celsius',
        },
      },
      twist: null,
    },
    ingredients: {
      malt: [
        {
          name: 'Maris Otter Extra Pale',
          amount: {
            value: 4.02,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Nelson Sauvin',
          amount: {
            value: 2,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Nelson Sauvin',
          amount: {
            value: 5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 2.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 1272 - American Ale II™',
    },
    food_pairing: ['Quince cheese', 'Shredded chicken and mango salsa taquitos', 'Poached pear'],
    brewers_tips:
      "After the beer has fermented, leave it to rest for 2 – 3 days at the lowest temperature possible (ideally 0 – 2'C). This will allow the flavours to marry together, and will transform it into a balanced and amazing beer.",
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 71,
    name: 'Pale - Russian Doll',
    tagline: 'Nesting Hop Bomb.',
    first_brewed: '08/2014',
    description:
      'The levels of hops vary throughout the range. We love hops, so all four beers are big, bitter badasses, but by tweaking the amount of each hop used later in the boil and during dry- hopping, we can balance the malty backbone with some unexpected flavours. Simcoe is used in the whirlpool for all four beers, and yet still lends different characters to each.',
    image_url: 'https://images.punkapi.com/v2/71.png',
    abv: 4,
    ibu: 35,
    target_fg: 1010,
    target_og: 1041,
    ebc: 45,
    srm: 22.5,
    ph: 5.2,
    attenuation_level: 75.6,
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
          value: 19,
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
            value: 3.63,
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
            value: 0.13,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Cascade',
          amount: {
            value: 7.5,
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
          name: 'Citra',
          amount: {
            value: 5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 17.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 62.5,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Cascade',
          amount: {
            value: 62.5,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Centennial',
          amount: {
            value: 62.5,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Citra',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: [
      'Roast chicken with vegetables and wild rice',
      'Fresh pico de gallo with corn tortilla',
      'Carrot cake',
    ],
    brewers_tips: 'Create balance through experimentation with the hop amounts and malt backbone.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 73,
    name: 'Black Eyed King Imp - Vietnamese Coffee Edition',
    tagline: 'Vietnamese Coffee Edition.',
    first_brewed: '12/2014',
    description:
      "This is the Vietnamese Coffee Edition. At 12.7% ABV, Black Eyed King Imp is a super intense and twistedly complex brew, with intense notes of sweet vanilla, rich espresso, smooth molasses and bitter chocolate barely contained by the whatever container it's in.",
    image_url: 'https://images.punkapi.com/v2/73.png',
    abv: 12.7,
    ibu: 85,
    target_fg: 1038,
    target_og: 1113.5,
    ebc: 250,
    srm: 125,
    ph: 5.2,
    attenuation_level: 76.8,
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
          value: 18,
          unit: 'celsius',
        },
      },
      twist: 'Coffee Beans: 12.5g at end, Lactose: 125g at FV, Bourbon barrel aged',
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 6.25,
            unit: 'kilograms',
          },
        },
        {
          name: 'Wheat',
          amount: {
            value: 1.25,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 1.25,
            unit: 'kilograms',
          },
        },
        {
          name: 'Crystal',
          amount: {
            value: 1.5625,
            unit: 'kilograms',
          },
        },
        {
          name: 'Dark Crystal',
          amount: {
            value: 0.625,
            unit: 'kilograms',
          },
        },
        {
          name: 'Amber',
          amount: {
            value: 0.625,
            unit: 'kilograms',
          },
        },
        {
          name: 'Brown',
          amount: {
            value: 0.625,
            unit: 'kilograms',
          },
        },
        {
          name: 'Chocolate',
          amount: {
            value: 0.625,
            unit: 'kilograms',
          },
        },
        {
          name: 'Roasted Barley',
          amount: {
            value: 0.3125,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Magnum',
          amount: {
            value: 62.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Willamette',
          amount: {
            value: 31.25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'bitter',
        },
        {
          name: 'First Gold',
          amount: {
            value: 31.25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'aroma / bitter',
        },
      ],
      yeast: 'Wyeast 1272 - American Ale II™',
    },
    food_pairing: ['Bacon sandwich with brown sauce', '20hr smoked brisket', 'Chocolate fudge ice cream'],
    brewers_tips:
      'Buying top notch coffee beans make a huge difference here. Give them a very course grind to get the most out of them.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 77,
    name: 'Hobo Pop',
    tagline: '2013 Prototype Rye Pale Ale.',
    first_brewed: '11/2013',
    description:
      'Brewed with mountains of Wheat, Rye, Cara and Crystal malts, fermented with an American ale yeast and bittered with Amarillo & Centennial, this 4.2% beer is what happens if something classy like a European wheat beer goes to live in Vegas. Zingy citrus hops and a punchy bitterness bolster this low ABV pale.',
    image_url: 'https://images.punkapi.com/v2/77.png',
    abv: 4.2,
    ibu: 50,
    target_fg: 1010,
    target_og: 1042,
    ebc: 30,
    srm: 15,
    ph: 4.4,
    attenuation_level: 76.2,
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
          value: 19,
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
            value: 2.06,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.63,
            unit: 'kilograms',
          },
        },
        {
          name: 'Crystal 150',
          amount: {
            value: 0.25,
            unit: 'kilograms',
          },
        },
        {
          name: 'Wheat',
          amount: {
            value: 0.5,
            unit: 'kilograms',
          },
        },
        {
          name: 'Rye',
          amount: {
            value: 0.19,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Centennial',
          amount: {
            value: 2.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 2.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Centennial',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Centennial',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 150,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Centennial',
          amount: {
            value: 125,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: ['Mozzarella and tomato baked chicken', 'Spiced shrimp salad', 'Strawberry cheescake'],
    brewers_tips: 'Add the rye and wheat malt evenly through the mash.',
    contributed_by: 'Ali Skinner <AliSkinner>',
  },
  {
    id: 79,
    name: 'Hops Kill Nazis',
    tagline: 'Imperial Red Ale.',
    first_brewed: '08/2011',
    description:
      "5AM Saint's big brother. Dry- hopping with Chinook gave Hops Kill Nazis a full-on, instantly recognisable US hop character - huge resinous aromas (think giant redwood) with a bitter grapefruit edge. The caramel malts bring flavours of toffee and burnt sugar, which gave Hops Kill Nazis a big, complex malt base supporting the intense hopping.",
    image_url: 'https://images.punkapi.com/v2/79.png',
    abv: 7.6,
    ibu: 70,
    target_fg: 1015,
    target_og: 1073,
    ebc: 59,
    srm: 29.5,
    ph: 4.4,
    attenuation_level: 79.5,
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
            value: 68,
            unit: 'celsius',
          },
          duration: null,
        },
      ],
      fermentation: {
        temp: {
          value: 20,
          unit: 'celsius',
        },
      },
      twist: null,
    },
    ingredients: {
      malt: [
        {
          name: 'Maris Otter Extra Pale',
          amount: {
            value: 4.82,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 2.5,
            unit: 'kilograms',
          },
        },
        {
          name: 'Crystal 150',
          amount: {
            value: 0.96,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Chinook',
          amount: {
            value: 40,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Chinook',
          amount: {
            value: 62.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Centennial',
          amount: {
            value: 62.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Chinook',
          amount: {
            value: 178,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1272 - American Ale II™',
    },
    food_pairing: ['Candied almond and blue cheese rocket salad', 'Chicken Tikka Madras', 'Pecan pie'],
    brewers_tips:
      'A red colour is a difficult hue to achieve in beer. Experiment with different amounts of Crystal malt to fine tune the colour.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 81,
    name: 'India Session Lager - Prototype Challenge',
    tagline: 'Refreshing Hop Fix.',
    first_brewed: '11/2015',
    description:
      'BrewDog’s level of dry-hop to a beer formed with a baseline of 100% pilsner malt – and at under 4.5% ABV – gives you a style that flirts at the edges of several others. Think aromas of fresh cut grass, nettle, white grape, melon, tangerine - with similar flavours leading to a dry, bitter finish.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    abv: 4.4,
    ibu: 35,
    target_fg: 1007,
    target_og: 1040,
    ebc: 12,
    srm: 6,
    ph: 4.4,
    attenuation_level: 79.5,
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
          value: 10,
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
            value: 3.25,
            unit: 'kilograms',
          },
        },
        {
          name: 'Dextrin Malt',
          amount: {
            value: 0.38,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Chinook',
          amount: {
            value: 2.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Citra',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Mosaic',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 63,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'flavour',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 63,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'flavour',
        },
        {
          name: 'Citra',
          amount: {
            value: 63,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 2007 - Pilsen Lager™',
    },
    food_pairing: ['Tomato and rosemary palmiers', 'Bratwurst with sauerkraut', 'Lemon drizzle cake'],
    brewers_tips: 'Let the beer lager at a low temperature for 3-4 weeks before adding the dry hops.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 82,
    name: 'Hopped-Up Brown Ale - Prototype Challenge',
    tagline: 'Malt Hop Balance.',
    first_brewed: '01/2016',
    description:
      'Brown ales are perfect foils for resinous C-Hops, as the piney elements of the latter contrast brilliantly with the sweeter, nutty elements of the malt bill. The best of both worlds.',
    image_url: 'https://images.punkapi.com/v2/82.png',
    abv: 6.3,
    ibu: 85,
    target_fg: 1015,
    target_og: 1063,
    ebc: 24,
    srm: 12,
    ph: 4.2,
    attenuation_level: 82.6,
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
          value: 19,
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
            value: 4,
            unit: 'kilograms',
          },
        },
        {
          name: 'Flaked Oats',
          amount: {
            value: 0.75,
            unit: 'kilograms',
          },
        },
        {
          name: 'Brown',
          amount: {
            value: 0.38,
            unit: 'kilograms',
          },
        },
        {
          name: 'Crystal 150',
          amount: {
            value: 0.25,
            unit: 'kilograms',
          },
        },
        {
          name: 'Munich',
          amount: {
            value: 0.5,
            unit: 'kilograms',
          },
        },
        {
          name: 'Carafa Special Malt Type 1',
          amount: {
            value: 0.06,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Columbus',
          amount: {
            value: 47,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Centennial',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Columbus',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 37.5,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Citra',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'FV',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: ['Butternut squash and sage soup', 'Roast beef and horseradish sandwich', 'Fudge'],
    brewers_tips: 'High carbonate water will really accent the malt notes to better balance the punchy hops.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 85,
    name: 'Santa Paws',
    tagline: 'Christmas Scoth Ale.',
    first_brewed: '10/2010',
    description:
      'A 4.5% decadent scotch ale brewed with Scottish heather honey. A robust malty beer packed with flavour, at a strength you can drink all (Christmas) day long. Santa Paws is our antidote to the chaos of the festive season. All the flavours of Christmas pudding in liquid form.',
    image_url: 'https://images.punkapi.com/v2/85.png',
    abv: 4.5,
    ibu: 35,
    target_fg: 1013,
    target_og: 1048,
    ebc: 44,
    srm: 22,
    ph: 4.4,
    attenuation_level: 72.9,
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
            value: 66,
            unit: 'celsius',
          },
          duration: 75,
        },
      ],
      fermentation: {
        temp: {
          value: 19,
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
            value: 1.75,
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
          name: 'Dark Crystal',
          amount: {
            value: 0.5,
            unit: 'kilograms',
          },
        },
        {
          name: 'Wheat',
          amount: {
            value: 0.56,
            unit: 'kilograms',
          },
        },
        {
          name: 'Flaked Oats',
          amount: {
            value: 0.56,
            unit: 'kilograms',
          },
        },
        {
          name: 'Carafa Special Malt Type 3',
          amount: {
            value: 0.13,
            unit: 'kilograms',
          },
        },
        {
          name: 'Amber',
          amount: {
            value: 0.25,
            unit: 'kilograms',
          },
        },
        {
          name: 'Weyermann Beech Smoked',
          amount: {
            value: 0.63,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'First Gold',
          amount: {
            value: 18.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Willamette',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Hallertauer Mittelfrüh',
          amount: {
            value: 6.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: ['French onion soup', 'Braised pheasant', 'Caramel sauce and hot fudge'],
    brewers_tips: 'The addition of Weyermann Beech Smoked malt creates a beer with a delicate smoke character.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 86,
    name: 'Original Dogma (Née Speedball)',
    tagline: 'Strong Ale With Honey And Spices.',
    first_brewed: '07/2008',
    description:
      'A strong ale, brewed with guarana, Californian poppy, kola nut and Scottish heather honey. A conspiracy of trans-continental ingredients infused with some devastatingly BrewDog imaginative thinking.',
    image_url: 'https://images.punkapi.com/v2/86.png',
    abv: 7.8,
    ibu: 60,
    target_fg: 1012,
    target_og: 1071.3,
    ebc: 31,
    srm: 15.5,
    ph: 4.3,
    attenuation_level: 83.2,
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
            value: 64,
            unit: 'celsius',
          },
          duration: 75,
        },
      ],
      fermentation: {
        temp: {
          value: 21,
          unit: 'celsius',
        },
      },
      twist: 'Herb and honey addition',
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 4.5,
            unit: 'kilograms',
          },
        },
        {
          name: 'Munich',
          amount: {
            value: 0.5,
            unit: 'kilograms',
          },
        },
        {
          name: 'Amber',
          amount: {
            value: 0.05,
            unit: 'kilograms',
          },
        },
        {
          name: 'Dark Crystal',
          amount: {
            value: 0.08,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Amarillo',
          amount: {
            value: 30,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 10,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Bobek',
          amount: {
            value: 10,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Guarana Powder',
          amount: {
            value: 6,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Kola Nut Powder',
          amount: {
            value: 6,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Poppy Seed',
          amount: {
            value: 6,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Heather Honey',
          amount: {
            value: 100,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Safale US-05',
    },
    food_pairing: ['Spicy seafood stew', 'French onion soup', 'Mexican wedding cake (cookies)'],
    brewers_tips:
      'Get really good quality heather honey, the more aromatic the better. Honey is 100% fermentable, but it does have a huge influence on the ester profile of the beer – in this case high floral esters.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 87,
    name: 'Alpha Pop',
    tagline: 'Hoppy Rye Pale Ale.',
    first_brewed: '03/2014',
    description:
      'A hoppy Rye Ale loaded with an avalanche of citrus and resinous flavours. Columbus, our high-alpha friend, lends a huge pithy citrus blast, with Ahtanum providing a punchy tropical fruit back-up. Brewing with rye adds a spiciness to the speciality malt caramel backbone, giving a warm ginger snap flavour, before slowly the hops, barley and rye combine and build to an orangey, biscuity, almost chocolatey crescendo.',
    image_url: 'https://images.punkapi.com/v2/87.png',
    abv: 4.5,
    ibu: 30,
    target_fg: 1011,
    target_og: 1045,
    ebc: 25,
    srm: 12.5,
    ph: 4.4,
    attenuation_level: 75.6,
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
          value: 19,
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
            value: 3.69,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.16,
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
          name: 'Rye',
          amount: {
            value: 0.31,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Columbus',
          amount: {
            value: 5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Columbus',
          amount: {
            value: 7.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Ahtanum',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Ahtanum',
          amount: {
            value: 37.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Ahtanum',
          amount: {
            value: 125,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Columbus',
          amount: {
            value: 125,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: [
      'Spicy lamb tikka masala',
      'Spicy beef and Mexican black bean burger',
      'Poached cinnamon apple muffins',
    ],
    brewers_tips: 'Columbus and Ahtanum hop additions create a perfect blend of resin and lemon character.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 91,
    name: 'Dead Pony Club',
    tagline: 'West Coast Kicks. Citrusy. Zesty. Bright.',
    first_brewed: '03/2012',
    description:
      'Our California style West Coast IPA has light toffee and caramel notes layered on biscuit malt, supporting a huge, fresh citrus aroma, with lemongrass, lime zest, grapefruit peel, alongside some tropical notes, courtesy of some heavy-hitting US hops.',
    image_url: 'https://images.punkapi.com/v2/91.png',
    abv: 3.8,
    ibu: 35,
    target_fg: 1012,
    target_og: 1040,
    ebc: 25,
    srm: 12.7,
    ph: 4.4,
    attenuation_level: 70,
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
            value: 62,
            unit: 'celsius',
          },
          duration: 75,
        },
      ],
      fermentation: {
        temp: {
          value: 19,
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
            value: 2.79,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.63,
            unit: 'kilograms',
          },
        },
        {
          name: 'Crystal 150',
          amount: {
            value: 0.19,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Simcoe',
          amount: {
            value: 5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Citra',
          amount: {
            value: 5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Citra',
          amount: {
            value: 5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 50,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Citra',
          amount: {
            value: 75,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Mosaic',
          amount: {
            value: 62.5,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: ['Baja style fish tacos', 'Jerk chicken', 'Apple crumble'],
    brewers_tips:
      'It may be tempting to throw extra (extra) hops at Dead Pony Club, but try adding a little at a time to consecutive brews rather than cramming in loads extra on your first time.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 95,
    name: 'Peroxide Punk',
    tagline: 'Zesty Pale Ale.',
    first_brewed: '04/2007',
    description:
      'A trashy blonde concession for those who felt that our original 6% Punk IPA recipe was too hard hitting. This was also the first time we experimented with dry hopping our beers, giving Peroxide Punk a depth of flavour that belies its modest ABV. Zesty, aromatic and thirst quenching.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    abv: 4,
    ibu: 40,
    target_fg: 1009,
    target_og: 1039,
    ebc: 18,
    srm: 9,
    ph: 4.4,
    attenuation_level: 76.9,
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
          value: 19,
          unit: 'celsius',
        },
      },
      twist: null,
    },
    ingredients: {
      malt: [
        {
          name: 'Maris Otter',
          amount: {
            value: 3.85,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Amarillo',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 20,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Crystal',
          amount: {
            value: 20,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Liberty',
          amount: {
            value: 20,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 50,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 50,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: ['Sashimi', 'Pan roasted poussin with spring veg', 'Lemon and thyme panna cotta'],
    brewers_tips:
      "During the mashing process, try to mix the malt without 'turning' or splashing too much. This will cause more oxygen to be dissolved in the mash - and result in a beer that will taste a little like a cardboard box.",
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 98,
    name: 'Pumpkin King',
    tagline: 'Spicy Citrus Pumpkin Ale.',
    first_brewed: '08/2015',
    description:
      "We're turning Hallowe’en inside out and upside down. Pumpkin King is not your usual unctuous, cloyingly sweet Hallowe’en pumpkin ale. Sure, there’s a huge heady hit of pungent spice on the nose, but it’s followed with bright and zesty citrus flavours, and a light mouthfeel. Spicy and sweet autumnal favourites like toasted marshmallow and toffee apple are just some of the complex notes you’ll find in our twisted take on a pumpkin ale, which weighs in at 5.4% ABV.",
    image_url: 'https://images.punkapi.com/v2/98.png',
    abv: 5.4,
    ibu: 20,
    target_fg: 1014,
    target_og: 1055,
    ebc: 30,
    srm: 15,
    ph: 4.4,
    attenuation_level: 74.6,
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
          value: 19,
          unit: 'celsius',
        },
      },
      twist:
        'Pumkin puree: 375g, Grains of Paradise: 2.5g at end, Star Anise: 1.5g at end, Cinnamon: 2.5g at end, Nutmeg: 2.5g at end, Allspice: 2.5g at end, Ginger: 2.5g at end, Clove: 2.5g at end',
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 3.88,
            unit: 'kilograms',
          },
        },
        {
          name: 'Munich',
          amount: {
            value: 0.63,
            unit: 'kilograms',
          },
        },
        {
          name: 'Dark Crystal',
          amount: {
            value: 0.13,
            unit: 'kilograms',
          },
        },
        {
          name: 'Amber',
          amount: {
            value: 0.38,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Magnum',
          amount: {
            value: 2.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Willamette',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'First Gold',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 1272 - American Ale II™',
    },
    food_pairing: ['Creamy maple syrup and bacon soup', 'Chunky chicken and vegetable spiced stew', 'Pumpkin pie'],
    brewers_tips:
      'Experiment with the spice addition to find the correct balance to suit your taste. FYI star anise is a very strong flavour.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 99,
    name: 'Hello My Name Is Päivi',
    tagline: 'Sea Buckthorn Double IPA.',
    first_brewed: '05/2014',
    description:
      'Brewed with sea buckthorn, a tart and bitter berry found on the Finnish coastline. Bright, vibrant aromas of tangerine, mandarin and peach, with zesty hits of lime, envelop the nutty, caramel malt backbone. The intense fruitiness gives a jammy quality to the nose. On the palate is a warm biscuity sweetness, with tropical fruits in a supporting role to a huge grapefruit and orange bitterness.',
    image_url: 'https://images.punkapi.com/v2/99.png',
    abv: 8.3,
    ibu: 70,
    target_fg: 1013,
    target_og: 1076,
    ebc: 30,
    srm: 15,
    ph: 4.4,
    attenuation_level: 82.9,
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
          value: 21,
          unit: 'celsius',
        },
      },
      twist: 'Sea Buckthorn Puree: 375g at end, EXP 366: 37.5g at dry hop',
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 6.13,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.88,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Challenger',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Bravo',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Comet',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'EXP 366',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Centennial',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Citra',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Comet',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Centennial',
          amount: {
            value: 62.5,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 62.5,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Citra',
          amount: {
            value: 62.5,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1272 - American Ale II™',
    },
    food_pairing: [
      'Korvapuusti (cinnamon and cardamom buns)',
      'Spicy orange chicken marmalade served with potato bread',
      'Sea buckthorn cheesecake',
    ],
    brewers_tips:
      'Sea buckthorn characteristics can vary from its country or origin. Taste the berries before addition to determine the best usage.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 100,
    name: 'Elvis Juice V2.0 - Prototype Challenge',
    tagline: 'Citrus Infused IPA.',
    first_brewed: '12/2015',
    description:
      'Punchy resinous hoppy aromas blast from the glass; light floral and citrus notes riff against huge piney character. Showcasing Citra, Simcoe and Amarillo at their absolute best. A huge dose of grapefruit peel brings swirls of fresh pithy zest, accentuating the dry hops and building on the dry, biscuit malt base.',
    image_url: 'https://images.punkapi.com/v2/100.png',
    abv: 6.5,
    ibu: 60,
    target_fg: 1010,
    target_og: 1060,
    ebc: 25,
    srm: 12.5,
    ph: 4.4,
    attenuation_level: 83.3,
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
          value: 19,
          unit: 'celsius',
        },
      },
      twist: 'Add grapefruit and orange peel into the boil and FV for extra citrus twist',
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 4.5,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.88,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Magnum',
          amount: {
            value: 2.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Mosaic',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Citra',
          amount: {
            value: 25,
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
        {
          name: 'Simcoe',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Citra',
          amount: {
            value: 50,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 50,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 50,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: ['Mexican ceviche', 'Coriander and lime green thai curry', 'Grapefruit souffle'],
    brewers_tips:
      'Shave of the surface of the citrus peel to unlock the highly aromatic compounds into the beer. Avoid putting any white pith into the brew as it will create an intense and unpleasant bitterness.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 101,
    name: 'Riptide',
    tagline: 'Twisted Merciless Stout.',
    first_brewed: '04/2007',
    description:
      "The original BrewDog, Bracken decided to make a beer that best reflected himself; this is the beer equivalent of the big, cute chocolate monster. Soft, smooth, dark, chocolatey and a force to be reckoned with. This gentle giant will never bite, but you'll still want to be on your best behaviour!",
    image_url: 'https://images.punkapi.com/v2/101.png',
    abv: 8,
    ibu: 45,
    target_fg: 1014,
    target_og: 1075,
    ebc: 240,
    srm: 120,
    ph: 4.4,
    attenuation_level: 81.3,
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
          value: 20,
          unit: 'celsius',
        },
      },
      twist: 'Dark muscavado sugar 285g 30mins pre boil end',
    },
    ingredients: {
      malt: [
        {
          name: 'Maris Otter Extra Pale',
          amount: {
            value: 5.36,
            unit: 'kilograms',
          },
        },
        {
          name: 'Dark Crystal 350-400',
          amount: {
            value: 0.71,
            unit: 'kilograms',
          },
        },
        {
          name: 'Carafa Special Malt Type 3',
          amount: {
            value: 0.18,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.54,
            unit: 'kilograms',
          },
        },
        {
          name: 'Chocolate',
          amount: {
            value: 0.25,
            unit: 'kilograms',
          },
        },
        {
          name: 'Wheat',
          amount: {
            value: 0.36,
            unit: 'kilograms',
          },
        },
        {
          name: 'Flaked Oats',
          amount: {
            value: 0.54,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Columbus',
          amount: {
            value: 14.3,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Galena',
          amount: {
            value: 14.3,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Galena',
          amount: {
            value: 21.4,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Cascade',
          amount: {
            value: 21.4,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Columbus',
          amount: {
            value: 21.4,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 1272 - American Ale II™',
    },
    food_pairing: [
      'Seared scallops',
      'Pan seared venison with fruit salad side',
      'Caramelised apple pie with vanilla ice cream',
    ],
    brewers_tips:
      'We recommend adding the chocolate malt at the start of the run off to ensure you extract the flavour and colour without imparting too much of the astringency of the malt into your wort. This will give the beer a really smooth mouthfeel, making this dangerously drinkable at 8% ABV.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 102,
    name: 'Peach Therapy',
    tagline: 'Tart Belgian Tripple.',
    first_brewed: '06/2015',
    description:
      '9% abv sour tripel, infused with peach and apricot in collaboration with some of our favourite beer writers Adrian Tierney-Jones, Matt Curtis and Jonny and Brad from The Craft Beer Channel.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    abv: 9,
    ibu: 30,
    target_fg: 1000,
    target_og: 1071,
    ebc: 12,
    srm: 6,
    ph: 3.6,
    attenuation_level: 87,
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
            value: 60,
            unit: 'celsius',
          },
          duration: 10,
        },
        {
          temp: {
            value: 65,
            unit: 'celsius',
          },
          duration: 30,
        },
        {
          temp: {
            value: 72,
            unit: 'celsius',
          },
          duration: 10,
        },
        {
          temp: {
            value: 78,
            unit: 'celsius',
          },
          duration: 5,
        },
      ],
      fermentation: {
        temp: {
          value: 20,
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
            value: 14.5,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Mandarina Bavaria',
          amount: {
            value: 7.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Strisselspalt',
          amount: {
            value: 7.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Mandarina Bavaria',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Strisselspalt',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 3522 - Belgian Ardennes™',
    },
    food_pairing: ['Summer salad with pickled veg', 'Sticky barbecue spare ribs', 'Blueberry and almond tart'],
    brewers_tips:
      '20% of the original volume of wort was brewed again, kettle soured and added during fermentation to give a tart finish to the beer.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 104,
    name: 'India Pale Weizen (w/ Weihenstephan)',
    tagline: 'BrewDog Versus Weihenstephan.',
    first_brewed: '09/2014',
    description:
      ' BrewDog vs. Weihenstephan India Pale Weizen kicked off a new direction for our collaborations. We took a simple concept (by our standards) and teamed up with the oldest brewery in the world to brew a mash-up beer using the signature styles of both breweries. India Pale Weizen has classic base hefeweizen aromas and flavours of banana, clove and bubblegum, with a distinctive haziness. Layered on top of this is a tapestry of US citrus hop character. India Pale Weizen is a perfect symbiosis of traditional and modern brewing.',
    image_url: 'https://images.punkapi.com/v2/104.png',
    abv: 6.2,
    ibu: 50,
    target_fg: 1010,
    target_og: 1056,
    ebc: 35,
    srm: 17.5,
    ph: 4,
    attenuation_level: 85,
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
          value: 21,
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
            value: 3,
            unit: 'kilograms',
          },
        },
        {
          name: 'Wheat',
          amount: {
            value: 2,
            unit: 'kilograms',
          },
        },
        {
          name: 'Dark Crystal',
          amount: {
            value: 0.08,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Cascade',
          amount: {
            value: 6,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Cascade',
          amount: {
            value: 6,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Saaz',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Hersbrucker',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 3638 - Bavarian Wheat™',
    },
    food_pairing: ['Korean barbecue nachos', 'Beef pho soup', 'Waffles with caramelised apple and powdered sugar'],
    brewers_tips:
      'Let the fermentation temperature creep up a couple of degrees higher than normal to create the characteristic banana and bubblegum aromas.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 106,
    name: 'Punk IPA 2010 - Current',
    tagline: 'Post Modern Classic. Spiky. Tropical. Hoppy.',
    first_brewed: '10/2010',
    description:
      'Punk IPA. Amplified. In 2010 we finally got our paws on the equipment we needed to dry hop our beers. We focused all our energy on dry hopping, amping up the aroma and flavour of our flagship beer to create a relentless explosion of tropical fruits, and adding a hint of Caramalt to balance out the insane amount of hops.',
    image_url: 'https://images.punkapi.com/v2/106.png',
    abv: 5.6,
    ibu: 40,
    target_fg: 1011,
    target_og: 1055,
    ebc: 15,
    srm: 7.6,
    ph: 4.4,
    attenuation_level: 78,
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
            value: 66,
            unit: 'celsius',
          },
          duration: 75,
        },
      ],
      fermentation: {
        temp: {
          value: 19,
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
            value: 4.38,
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
      ],
      hops: [
        {
          name: 'Chinook',
          amount: {
            value: 20,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Ahtanum',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Chinook',
          amount: {
            value: 20,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Ahtanum',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Chinook',
          amount: {
            value: 27.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Ahtanum',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Nelson Sauvin',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Chinook',
          amount: {
            value: 47.5,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Ahtanum',
          amount: {
            value: 37.5,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 37.5,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Nelson Sauvin',
          amount: {
            value: 20,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Cascade',
          amount: {
            value: 37.5,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 10,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: [
      'Spicy carne asada with a pico de gallo sauce',
      'Shredded chicken tacos with a mango chilli lime salsa',
      'Cheesecake with a passion fruit swirl sauce',
    ],
    brewers_tips:
      'To get the best possible profile from the dry hops we recommend dry hopping post fermentation for 5 days. Dry hops should be added at cellar temperature. We find 14°C results in the most aromatic dry hop profile.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 107,
    name: 'HBC 366 - IPA Is Dead',
    tagline: 'Single Hop India Pale Ale.',
    first_brewed: '02/2014',
    description:
      'A new, at-the-time un-named American hop now known as Equinox. Piney, resinous with spicy fruit notes and biting grapefruit. Stewed orange and pineapple with a resinous edge.',
    image_url: 'https://images.punkapi.com/v2/107.png',
    abv: 7.2,
    ibu: 70,
    target_fg: 1012,
    target_og: 1067,
    ebc: 30,
    srm: 15,
    ph: 4.4,
    attenuation_level: 82.1,
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
          value: 19,
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
            value: 5.65,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.31,
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
      ],
      hops: [
        {
          name: 'HBC 366',
          amount: {
            value: 2.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'HBC 366',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'HBC 366',
          amount: {
            value: 37.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'HBC 366',
          amount: {
            value: 250,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: ['Spicy black bean and chicken tortilla soup', 'Spicy lamb tikka masala', 'Fruity bread pudding'],
    brewers_tips:
      'With new hop varieties, growers are discovering flavour attributes completely unexpected from hops, which can add unique character to your brews.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 109,
    name: 'Cocoa Psycho',
    tagline: 'Russian Imperial Stout. Rich. Decadent. Mocha.',
    first_brewed: '11/2012',
    description:
      'Vanilla pods and toasted oak chips add a rounded character to this massive Russian Imperial Stout, brewed with a hefty malt bill, cacao nibs and coffee beans. Dark malts combine with Cascade to add a punchy bitterness, strong enough to offset the big chocolate sweetness.',
    image_url: 'https://images.punkapi.com/v2/109.png',
    abv: 10,
    ibu: 85,
    target_fg: 1012,
    target_og: 1098,
    ebc: 30,
    srm: 15.25,
    ph: 4.4,
    attenuation_level: 70,
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
          value: 21,
          unit: 'celsius',
        },
      },
      twist:
        'Coffee Beans: 25g at end, Cocoa Nibs: 25g at end, Cocoa Nibs: 25g at conditioning, Coffee Beans: 25g at conditioning, Oak Chips: 15g at conditioning',
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 6.88,
            unit: 'kilograms',
          },
        },
        {
          name: 'Wheat',
          amount: {
            value: 1,
            unit: 'kilograms',
          },
        },
        {
          name: 'Dark Crystal',
          amount: {
            value: 0.13,
            unit: 'kilograms',
          },
        },
        {
          name: 'Black Malt',
          amount: {
            value: 1.25,
            unit: 'kilograms',
          },
        },
        {
          name: 'Roasted Barley',
          amount: {
            value: 1.5,
            unit: 'kilograms',
          },
        },
        {
          name: 'Weyermann Smoked',
          amount: {
            value: 0.5,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Cascade',
          amount: {
            value: 75,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Cascade',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 1272 - American Ale II™',
    },
    food_pairing: [
      'Smokey sweet pulled brisket',
      'Espresso crusted venison with a dark cherry jus',
      'Affogato with vanilla ice cream',
    ],
    brewers_tips:
      'Put coffee beans and cocoa nibs in a cheese cloth and dip in wort like a tea bag. Do multiple small additions for short lengths of time – the longer you leave them in the more heavy oils will be extracted.',
    contributed_by: 'Sam Mason <samjbmason>',
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
    id: 112,
    name: 'Vote Sepp',
    tagline: 'Witbier With Hibiscus.',
    first_brewed: '05/2014',
    description:
      'Vote Sepp is a single hop wheat beer brewed to a session strength, with hibiscus flower, which gives it an impressively vibrant shade of pink. What Vote Sepp lacks in complexity, it more than makes up for in a perfect balance of tartness, bitterness and body.',
    image_url: 'https://images.punkapi.com/v2/112.png',
    abv: 3.6,
    ibu: 20,
    target_fg: 1009,
    target_og: 1036,
    ebc: 8,
    srm: 4,
    ph: 4.1,
    attenuation_level: 75,
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
          value: 21,
          unit: 'celsius',
        },
      },
      twist: 'Hibiscus: 37.5g Tank',
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 2.5,
            unit: 'kilograms',
          },
        },
        {
          name: 'Torrified Wheat',
          amount: {
            value: 0.69,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Motueka',
          amount: {
            value: 5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Motueka',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Motueka',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 3944 - Belgian Witbier™',
    },
    food_pairing: [
      'Crab roll sushi with strawberries',
      'Artichoke hearts and chicken melt',
      'Caprese salad (mozzarella, tomato, basil, black pepper and sea salt)',
    ],
    brewers_tips: 'Load hibiscus in the hot wort in a tea bag.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 115,
    name: 'Melon And Cucumber IPA - B-Sides',
    tagline: 'Fresh Melon IPA.',
    first_brewed: '03/2015',
    description:
      'A Pilot Brew with 200Kg of fresh melon and 5Kg fresh cucumber added after fermentation to produce the perfect summer refreshment.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    abv: 6,
    ibu: 50,
    target_fg: 1010,
    target_og: 1050,
    ebc: 8,
    srm: 4,
    ph: 5.2,
    attenuation_level: 87,
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
            value: 60,
            unit: 'celsius',
          },
          duration: 10,
        },
        {
          temp: {
            value: 65,
            unit: 'celsius',
          },
          duration: 30,
        },
        {
          temp: {
            value: 72,
            unit: 'celsius',
          },
          duration: 10,
        },
        {
          temp: {
            value: 78,
            unit: 'celsius',
          },
          duration: 5,
        },
      ],
      fermentation: {
        temp: {
          value: 20,
          unit: 'celsius',
        },
      },
      twist: 'Melon: 500g, Cucumber: 20g',
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 4.38,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.63,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Ahtanum',
          amount: {
            value: 7.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
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
          name: 'Ahtanum',
          amount: {
            value: 7.5,
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
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Ahtanum',
          amount: {
            value: 7.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Nelson Sauvin',
          amount: {
            value: 6,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: ['Beef carpaccio', 'Chilled beetroot soup', 'Korean watermelon salad'],
    brewers_tips:
      'Have a good food proccesser to blend up all the melon and cucumber, also sieve out the seeds from the melon.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 117,
    name: 'Hop Rocker',
    tagline: 'Hoppy Aggressive Lager',
    first_brewed: '04/2007',
    description:
      'The first of our foray into lager beer, Hop Rocker is a high impact, hoppy behemoth made with 100% malt. Since 2007 we have been obsessive about quality, using only the best ingredients to ensure the flavour and craftsmanship of the beer in your glass. Hop Rocker is testament to that. The malt base gives this beer a sweet, balanced complexity while the combination of New Zealand and German hops merges new world tropical juiciness with old world peppery spice.',
    image_url: 'https://images.punkapi.com/v2/117.png',
    abv: 5.5,
    ibu: 40,
    target_fg: 1010,
    target_og: 1052,
    ebc: 25,
    srm: 12,
    ph: 4.2,
    attenuation_level: 80.7,
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
          value: 10,
          unit: 'celsius',
        },
      },
      twist: null,
    },
    ingredients: {
      malt: [
        {
          name: 'Maris Otter Extra Pale',
          amount: {
            value: 3.78,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.31,
            unit: 'kilograms',
          },
        },
        {
          name: 'Munich',
          amount: {
            value: 0.31,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Cascade',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Saaz',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Cascade',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Motueka',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Chinook',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Saflager S189',
    },
    food_pairing: ['Cajun spiced chicken wings', 'Mild cheddar', 'Lemon tart'],
    brewers_tips:
      'After the fermentation has finished, chill the beer to below 5°C (if you can), wait 10 days and then rack the beer off the yeast into another bucket. The yeast left in suspension will carry on working its magic to create really clean, crisp lager flavours.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 121,
    name: 'Punk Monk',
    tagline: 'Who Ordered The Belgian Yeast?',
    first_brewed: '07/2009',
    description:
      'Old world meets new in this trans-atlantic mash up of brewing ingredients. Belgian funk incorporates itself into the pithy, resin and grapefruit, with pineapple and banana rounding out a rambunctious avalanche of fruity hops.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    abv: 6,
    ibu: 60,
    target_fg: 1010,
    target_og: 1056,
    ebc: 17,
    srm: 8.5,
    ph: 4.4,
    attenuation_level: 82.1,
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
          value: 19,
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
            value: 5.3,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Ahtanum',
          amount: {
            value: 17.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Chinook',
          amount: {
            value: 15,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Crystal',
          amount: {
            value: 17.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Chinook',
          amount: {
            value: 17.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Ahtanum',
          amount: {
            value: 17.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Chinook',
          amount: {
            value: 17.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Motueka',
          amount: {
            value: 17.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Chinook',
          amount: {
            value: 30,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 3522 - Belgian Ardennes™',
    },
    food_pairing: ['Moules frites', 'Thai green curry', 'Lemon posset'],
    brewers_tips:
      'Bottle condition and prime with a little bit more sugar than usual to attain those authentic fine Belgian bubbles.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 125,
    name: 'Juniper Wheat Beer',
    tagline: 'American Style Wheat Ale With Juniper Berries.',
    first_brewed: '06/2011',
    description:
      "A variant on the 2008 release of Bad Pixie, but hoppier. Substituting the lemon peel for Ahtanum provided a vibrant floral and lemon citrus hit, balancing the slight tartness from the wheat. This dry, effervescent brew is perfect on Scotland's one day of summer.",
    image_url: 'https://images.punkapi.com/v2/keg.png',
    abv: 5,
    ibu: 40,
    target_fg: 1008,
    target_og: 1047,
    ebc: 15,
    srm: 7.5,
    ph: 4.1,
    attenuation_level: 83,
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
            value: 64,
            unit: 'celsius',
          },
          duration: 75,
        },
      ],
      fermentation: {
        temp: {
          value: 17,
          unit: 'celsius',
        },
      },
      twist: null,
    },
    ingredients: {
      malt: [
        {
          name: 'Pale Ale',
          amount: {
            value: 2.75,
            unit: 'kilograms',
          },
        },
        {
          name: 'Wheat',
          amount: {
            value: 2.13,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Ahtanum',
          amount: {
            value: 31.25,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Ahtanum',
          amount: {
            value: 31.25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Juniper Berries',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1010 - American Wheat™',
    },
    food_pairing: ['Herring rollmops', 'Chicken schnitzel', 'Gin & elderflower jelly'],
    brewers_tips:
      'Give the juniper berries a quick blast in a food processor to break them up - otherwise they can jam up your fermenter.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 130,
    name: 'Spiced Cherry Sour - B-Sides',
    tagline: 'Alternative Festive.',
    first_brewed: '03/2015',
    description: 'Think bakewell tart with Christmas spices.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    abv: 6.5,
    ibu: 20,
    target_fg: 1010,
    target_og: 1060,
    ebc: null,
    srm: null,
    ph: 3.2,
    attenuation_level: 87,
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
            value: 60,
            unit: 'celsius',
          },
          duration: 10,
        },
        {
          temp: {
            value: 65,
            unit: 'celsius',
          },
          duration: 30,
        },
        {
          temp: {
            value: 72,
            unit: 'celsius',
          },
          duration: 10,
        },
        {
          temp: {
            value: 78,
            unit: 'celsius',
          },
          duration: 5,
        },
      ],
      fermentation: {
        temp: {
          value: 20,
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
            value: 3.75,
            unit: 'kilograms',
          },
        },
        {
          name: 'Wheat Malt',
          amount: {
            value: 0.63,
            unit: 'kilograms',
          },
        },
        {
          name: 'Rye',
          amount: {
            value: 1.25,
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
        {
          name: 'Dark Crystal',
          amount: {
            value: 0.63,
            unit: 'kilograms',
          },
        },
        {
          name: 'Special W',
          amount: {
            value: 0.63,
            unit: 'kilograms',
          },
        },
        {
          name: 'Munich',
          amount: {
            value: 0.63,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Citra',
          amount: {
            value: 3.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Sorachi Ace',
          amount: {
            value: 1.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: ['Wild rice salad with wild mushrooms', 'Apple gingerbread pancakes', 'Christmas Pudding'],
    brewers_tips:
      'In the boil: cinnamon, star anise, clove, guinea pepper. After fermentation add: raspberry puree, cherry concentrate, bitter almond extract, American oak chips and Tahitian vanilla beans.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 140,
    name: 'Pioneer - IPA Is Dead',
    tagline: 'Single Hop India Pale Ale.',
    first_brewed: '03/2015',
    description:
      '2015 IPA is Dead Series. Pioneer hails from the hop gardens of Kent, and for those expecting something classically English, they surprise with an unforeseen blast of lemony citrus. Bookended with a herbal, cedar quality, these high alpha UK hops pack a pithy zing not often seen from these hop-growing isles.',
    image_url: 'https://images.punkapi.com/v2/140.png',
    abv: 7.2,
    ibu: 100,
    target_fg: 1010,
    target_og: 1064,
    ebc: 12,
    srm: 6,
    ph: 4.4,
    attenuation_level: 84,
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
          value: 19,
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
            value: 5.88,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Pioneer',
          amount: {
            value: 41.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Pioneer',
          amount: {
            value: 41.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Pioneer',
          amount: {
            value: 41.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: ['Fried teriyaki chicken', 'Chicken jalfrezi', 'Chocolate and toffee fondant'],
    brewers_tips: 'Ensure to get the dry hops in and out within 3 days to ensure you capture the best of the hop.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 141,
    name: 'Cap Dog (w/ Cap Brewery)',
    tagline: 'Black Cascara IPA.',
    first_brewed: '08/2014',
    description: 'A collaboration by BrewDog and CAP with Cascara green unroasted cherry coffee beans.',
    image_url: 'https://images.punkapi.com/v2/141.png',
    abv: 9,
    ibu: 80,
    target_fg: 1014,
    target_og: 1083,
    ebc: 180,
    srm: 90,
    ph: 5.2,
    attenuation_level: 83.1,
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
          value: 21,
          unit: 'celsius',
        },
      },
      twist: 'Cascara: 500g',
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 7.02,
            unit: 'kilograms',
          },
        },
        {
          name: 'Crystal 150',
          amount: {
            value: 0.19,
            unit: 'kilograms',
          },
        },
        {
          name: 'Rye',
          amount: {
            value: 0.96,
            unit: 'kilograms',
          },
        },
        {
          name: 'Carafa Special Malt Type 1',
          amount: {
            value: 0.29,
            unit: 'kilograms',
          },
        },
        {
          name: 'Cascara',
          amount: {
            value: 0.04,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Centennial',
          amount: {
            value: 38.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Centennial',
          amount: {
            value: 19,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Centennial',
          amount: {
            value: 77,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Cascara',
          amount: {
            value: 38.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 1272 - American Ale II™',
    },
    food_pairing: ['Chilli con carne', 'Pepper jack cheese burger on a brioche bun', 'Coffee cake'],
    brewers_tips: 'Split the Cascara evenly between the mash and end of boil to really get the most out of it.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 143,
    name: 'Lizard Bride - Prototype Challenge',
    tagline: 'Fruit Infused Sour IPA.',
    first_brewed: '07/2015',
    description:
      'Wonderfully tart, bitter, piney and filled with the fruity elements from raspberries, blueberries and sour cherries. Oh, and it’s purple.',
    image_url: 'https://images.punkapi.com/v2/143.png',
    abv: 5.7,
    ibu: 35,
    target_fg: 1009,
    target_og: 1053,
    ebc: 25,
    srm: 12.5,
    ph: 4.4,
    attenuation_level: 79.3,
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
          value: 17,
          unit: 'celsius',
        },
      },
      twist:
        'Blackcurrant: 65g at FV, Sour Cherry: 65g at FV, Blueberry: 65g at FV, Sea Buckthorn: 65g at FV, Cranberry: 65g at FV, Blackberry: 65g at FV, Sweet cherry: 65g at FV',
    },
    ingredients: {
      malt: [
        {
          name: 'Extra Pale',
          amount: {
            value: 4.25,
            unit: 'kilograms',
          },
        },
        {
          name: 'Carared',
          amount: {
            value: 0.63,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Citra',
          amount: {
            value: 2.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Challenger',
          amount: {
            value: 6,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Centennial',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Citra',
          amount: {
            value: 10,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Citra',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Mosaic',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Bramling Cross',
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
            value: 50,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Citra',
          amount: {
            value: 50,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Bramling Cross',
          amount: {
            value: 50,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Mosaic',
          amount: {
            value: 50,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Nelson Sauvin',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: ['Roasted pumpkin and mozzarella', 'Black forrest gateaux'],
    brewers_tips:
      'Try to find the ripest berries possible to impart as much juicy goodness as possible. These can be forzen until you have the full set.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 153,
    name: 'Hoppy Saison - B-Sides',
    tagline: 'Hop Yeast Synergy.',
    first_brewed: '03/2015',
    description: 'Hoppy citrus and tropical fruit Saison.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    abv: 6.4,
    ibu: 40,
    target_fg: 1010,
    target_og: 1059,
    ebc: 8,
    srm: 4,
    ph: 5.2,
    attenuation_level: 87,
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
            value: 60,
            unit: 'celsius',
          },
          duration: 10,
        },
        {
          temp: {
            value: 65,
            unit: 'celsius',
          },
          duration: 30,
        },
        {
          temp: {
            value: 72,
            unit: 'celsius',
          },
          duration: 10,
        },
        {
          temp: {
            value: 78,
            unit: 'celsius',
          },
          duration: 5,
        },
      ],
      fermentation: {
        temp: {
          value: 20,
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
            value: 5,
            unit: 'kilograms',
          },
        },
        {
          name: 'Wheat Malt',
          amount: {
            value: 1.25,
            unit: 'kilograms',
          },
        },
        {
          name: 'Rye',
          amount: {
            value: 0.63,
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
          name: 'Citra',
          amount: {
            value: 7.5,
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
          name: 'Citra',
          amount: {
            value: 7.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Citra',
          amount: {
            value: 7.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Sorachi Ace',
          amount: {
            value: 7.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Mosaic',
          amount: {
            value: 7.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 3724 - Belgian Saison™',
    },
    food_pairing: ['Pad Thai', 'Paella', 'Smoked dry-cured venison sausage'],
    brewers_tips:
      "The stepped mash really makes the most out the raw ingredients. If you can't achieve this mash for 60mins at 65°C.",
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 155,
    name: 'Old World Russian Imperial Stout',
    tagline: 'Russian Imperial Stout.',
    first_brewed: '10/2011',
    description:
      'This Old World Stout perfectly recreates the export stouts of years gone by; brewed to imperial strength to avoid freezing during its journey across the Baltic Sea to snowy Moscow. Full bodied with huge chocolate, coffee and roast flavours, this imperial stout employs a variety of hops to add enough bitterness and hop complexity to balance the huge malt sweetness and rich mocha and molasses flavours.',
    image_url: 'https://images.punkapi.com/v2/155.png',
    abv: 9.5,
    ibu: 80,
    target_fg: 1014,
    target_og: 1075,
    ebc: 195,
    srm: 97.5,
    ph: 4.5,
    attenuation_level: 81.3,
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
            value: 64,
            unit: 'celsius',
          },
          duration: 90,
        },
      ],
      fermentation: {
        temp: {
          value: 19,
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
            value: 6.56,
            unit: 'kilograms',
          },
        },
        {
          name: 'Dark Crystal 350',
          amount: {
            value: 0.66,
            unit: 'kilograms',
          },
        },
        {
          name: 'Carafa Special Malt Type 3',
          amount: {
            value: 0.31,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.31,
            unit: 'kilograms',
          },
        },
        {
          name: 'Chocolate',
          amount: {
            value: 0.07,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Magnum',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Galena',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Hercules',
          amount: {
            value: 12.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Magnum',
          amount: {
            value: 6.25,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Galena',
          amount: {
            value: 6.25,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Cascade',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Galena',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 1272 - American Ale II™',
    },
    food_pairing: ['Seared steak with a peppercorn sauce', 'Strong blue cheese and oatcakes', 'Chocolate cheesecake'],
    brewers_tips:
      'Add the chocolate malt after the mash is complete, at the start of sparging. This will extract flavour and colour, but will prevent the extraction of harsh tannins into the wort.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 156,
    name: 'Hoppy Christmas',
    tagline: 'Simcoe Single-Hop India Pale Ale.',
    first_brewed: '10/2012',
    description:
      'Pineapple, citrus and papaya; single-hopped with Simcoe, Hoppy Christmas is an anti-festive IPA, redolent with summery flavours. Small caramel malt additions provide a touch of malt complexity. Simcoe, arguably our favourite hop, carries this beer - pine, tropical fruit and bitterness are its specialities.',
    image_url: 'https://images.punkapi.com/v2/156.png',
    abv: 7.2,
    ibu: 70,
    target_fg: 1012,
    target_og: 1067,
    ebc: 30,
    srm: 15,
    ph: 4.4,
    attenuation_level: 82.1,
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
          value: 19,
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
            value: 5.65,
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
      ],
      hops: [
        {
          name: 'Simcoe',
          amount: {
            value: 2.5,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 37.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
        {
          name: 'Simcoe',
          amount: {
            value: 187.5,
            unit: 'grams',
          },
          add: 'dry hop',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: ['Spiced cranberry turkey', 'Sriracha covered brussel sprouts', 'Ginger rice pudding'],
    brewers_tips: 'Get the freshest Simcoe for the best profile.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
];
