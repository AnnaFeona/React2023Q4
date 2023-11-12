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
    id: 223,
    name: 'Prototype Pils 2.0',
    tagline: 'Revamped German Pils.',
    first_brewed: '06/2016',
    description:
      'Our spin on a light, dry and bitter German lager. Hop driven with malt taking a back seat, Pils 2.0 is lined up to become a regular brew.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    abv: 4.7,
    ibu: 25,
    target_fg: 1044,
    target_og: 1008,
    ebc: 25,
    srm: 5,
    ph: 4.2,
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
          value: 12,
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
            value: 1.3,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.12,
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
          name: 'Pale Ale',
          amount: {
            value: 1.2,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Magnum',
          amount: {
            value: 4,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Perle',
          amount: {
            value: 20,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Perle',
          amount: {
            value: 10,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'aroma',
        },
      ],
      yeast: 'Wyeast 2007 - Pilsen Lager™',
    },
    food_pairing: [
      'Tuna & salmon sushi (with plenty of wasabi!)',
      'Chipotle chicken burrito',
      'Rhubarb fool with shortbread',
    ],
    brewers_tips:
      'Allow plenty of time for lagering with this brew to make sure you get the clean and crisp flavour profile.',
    contributed_by: 'Sam Mason <samjbmason>',
  },
  {
    id: 282,
    name: 'Pina Colada Sidewalk',
    tagline: 'Pineapple & Coconut Gose.',
    first_brewed: '2017',
    description:
      'After the success of the first version of Sidewalk Shark (a BrewDog bar exclusive), we decided to brew a second version, this time infused with tropical flavours of pineapple, coconut and lime.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    abv: 5.2,
    ibu: 10,
    target_fg: 1008,
    target_og: 1055,
    ebc: 15,
    srm: 7,
    ph: 3.8,
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
            value: 60,
            unit: 'celsius',
          },
          duration: 60,
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
          name: 'Pilsner',
          amount: {
            value: 3.627,
            unit: 'kilograms',
          },
        },
        {
          name: 'Torrified Wheat',
          amount: {
            value: 0.567,
            unit: 'kilograms',
          },
        },
        {
          name: 'Acidulated Malt',
          amount: {
            value: 0.287,
            unit: 'kilograms',
          },
        },
        {
          name: 'Rye',
          amount: {
            value: 0.136,
            unit: 'kilograms',
          },
        },
        {
          name: 'Flaked Oats',
          amount: {
            value: 0.287,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Magnum',
          amount: {
            value: 10,
            unit: 'grams',
          },
          add: '60',
          attribute: 'Bittering',
        },
        {
          name: 'Mosaic',
          amount: {
            value: 10,
            unit: 'grams',
          },
          add: '0',
          attribute: 'Aroma',
        },
        {
          name: 'Amarillo',
          amount: {
            value: 10,
            unit: 'grams',
          },
          add: '0',
          attribute: 'Aroma',
        },
        {
          name: 'Lemon Peel',
          amount: {
            value: 10,
            unit: 'grams',
          },
          add: 'Flame Out',
          attribute: 'Flavour',
        },
        {
          name: 'Coriander Seed',
          amount: {
            value: 0.5,
            unit: 'grams',
          },
          add: 'Flame Out',
          attribute: 'Flavour',
        },
        {
          name: 'Coconut Extract',
          amount: {
            value: 6,
            unit: 'grams',
          },
          add: 'Dry Hop',
          attribute: 'Flavour',
        },
        {
          name: 'Pineapple Juice',
          amount: {
            value: 50,
            unit: 'grams',
          },
          add: 'Dry Hop',
          attribute: 'Flavour',
        },
      ],
      yeast: 'Wyeast 1272 - American Ale II™',
    },
    food_pairing: [
      'White Chocolate and Pistachio Cheesecake',
      'Baked Tilapia With Lemon and Cream Sauce',
      'Vegan Mac and ‘Cheese’',
    ],
    brewers_tips:
      'Be careful with your salt additions. A very light saltiness aids the refreshing character. It should not overpower or drive you to seek another different beer to refresh your palate.',
    contributed_by: 'John Jenkman <johnjenkman>',
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
