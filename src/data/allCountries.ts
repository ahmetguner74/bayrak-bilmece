import { Country } from '../types';

type Difficulty = "Zor" | "Orta" | "Kolay";

const isValidDifficulty = (value: string): value is Difficulty => {
  return ["Zor", "Orta", "Kolay"].includes(value);
};

export const allCountries: Country[] = [
  // 1. ABD Küçük Dış Adaları
  {
    id: '1',
    name: 'ABD Küçük Dış Adaları',
    code: 'um',
    capital: '-',
    difficulty: 'Zor',
    location: {
      lat: 19.2823,
      lng: 166.6470
    }
  },

  // 2. ABD Virgin Adaları
  {
    id: '2',
    name: 'ABD Virgin Adaları',
    code: 'vi',
    capital: 'Charlotte Amalie',
    difficulty: 'Zor',
    location: {
      lat: 18.3358,
      lng: -64.8963
    }
  },

  // 3. Afganistan
  {
    id: '3',
    name: 'Afganistan',
    code: 'af',
    capital: 'Kabil',
    difficulty: 'Orta',
    location: {
      lat: 34.5328,
      lng: 69.1652
    }
  },

  {
    id: '4',
    name: 'Antigua ve Barbuda',
    code: 'ag',
    capital: "Saint John's",
    difficulty: 'Zor',
    location: {
      lat: 17.1175,
      lng: -61.8456
    }
  },
  {
    id: '5',
    name: 'Anguilla',
    code: 'ai',
    capital: 'The Valley',
    difficulty: 'Zor',
    location: {
      lat: 18.2206,
      lng: -63.0686
    }
  },
  {
    id: '6',
    name: 'Arnavutluk',
    code: 'al',
    capital: 'Tiran',
    difficulty: 'Orta',
    location: {
      lat: 41.3275,
      lng: 19.8187
    }
  },
  {
    id: '7',
    name: 'Ermenistan',
    code: 'am',
    capital: 'Erivan',
    difficulty: 'Orta',
    location: {
      lat: 40.1776,
      lng: 44.5126
    }
  },
  {
    id: '8',
    name: 'Angola',
    code: 'ao',
    capital: 'Luanda',
    difficulty: 'Orta',
    location: {
      lat: -8.8383,
      lng: 13.2344
    }
  },
  {
    id: '9',
    name: 'Antarktika',
    code: 'aq',
    capital: '-',
    difficulty: 'Zor',
    location: {
      lat: -90.0000,
      lng: 0.0000
    }
  },
  {
    id: '10',
    name: 'Arjantin',
    code: 'ar',
    capital: 'Buenos Aires',
    difficulty: 'Orta',
    location: {
      lat: -34.6037,
      lng: -58.3816
    }
  },
  {
    id: '11',
    name: 'Amerikan Samoası',
    code: 'as',
    capital: 'Pago Pago',
    difficulty: 'Zor',
    location: {
      lat: -14.2710,
      lng: -170.1322
    }
  },
  {
    id: '12',
    name: 'Avusturya',
    code: 'at',
    capital: 'Viyana',
    difficulty: 'Kolay',
    location: {
      lat: 48.2082,
      lng: 16.3738
    }
  },
  {
    id: '13',
    name: 'Avustralya',
    code: 'au',
    capital: 'Canberra',
    difficulty: 'Kolay',
    location: {
      lat: -35.2809,
      lng: 149.1300
    }
  },
  {
    id: '14',
    name: 'Aruba',
    code: 'aw',
    capital: 'Oranjestad',
    difficulty: 'Zor',
    location: {
      lat: 12.5211,
      lng: -70.0379
    }
  },
  {
    id: '15',
    name: 'Åland Adaları',
    code: 'ax',
    capital: 'Mariehamn',
    difficulty: 'Zor',
    location: {
      lat: 60.1167,
      lng: 19.9000
    }
  },
  {
    id: '16',
    name: 'Azerbaycan',
    code: 'az',
    capital: 'Bakü',
    difficulty: 'Orta',
    location: {
      lat: 40.4093,
      lng: 49.8671
    }
  },
  {
    id: '17',
    name: 'Bosna Hersek',
    code: 'ba',
    capital: 'Saraybosna',
    difficulty: 'Orta',
    location: {
      lat: 43.8564,
      lng: 18.4131
    }
  },
  {
    id: '18',
    name: 'Barbados',
    code: 'bb',
    capital: 'Bridgetown',
    difficulty: 'Zor',
    location: {
      lat: 13.1132,
      lng: -59.5988
    }
  },
  {
    id: '19',
    name: 'Bangladeş',
    code: 'bd',
    capital: 'Dakka',
    difficulty: 'Orta',
    location: {
      lat: 23.8103,
      lng: 90.4125
    }
  },
  {
    id: '20',
    name: 'Belçika',
    code: 'be',
    capital: 'Brüksel',
    difficulty: 'Kolay',
    location: {
      lat: 50.8503,
      lng: 4.3517
    }
  },
  {
    id: '21',
    name: 'Burkina Faso',
    code: 'bf',
    capital: 'Ouagadougou',
    difficulty: 'Zor',
    location: {
      lat: 12.3714,
      lng: -1.5197
    }
  },
  {
    id: '22',
    name: 'Bulgaristan',
    code: 'bg',
    capital: 'Sofya',
    difficulty: 'Orta',
    location: {
      lat: 42.6977,
      lng: 23.3219
    }
  },
  {
    id: '23',
    name: 'Bahreyn',
    code: 'bh',
    capital: 'Manama',
    difficulty: 'Orta',
    location: {
      lat: 26.2285,
      lng: 50.5860
    }
  },
  {
    id: '24',
    name: 'Burundi',
    code: 'bi',
    capital: 'Gitega',
    difficulty: 'Zor',
    location: {
      lat: -3.4426,
      lng: 29.9245
    }
  },
  {
    id: '25',
    name: 'Benin',
    code: 'bj',
    capital: 'Porto-Novo',
    difficulty: 'Zor',
    location: {
      lat: 6.4969,
      lng: 2.6283
    }
  },
  {
    id: '26',
    name: 'Saint Barthélemy',
    code: 'bl',
    capital: 'Gustavia',
    difficulty: 'Zor',
    location: {
      lat: 17.8960,
      lng: -62.8508
    }
  },
  {
    id: '27',
    name: 'Bermuda',
    code: 'bm',
    capital: 'Hamilton',
    difficulty: 'Zor',
    location: {
      lat: 32.2949,
      lng: -64.7859
    }
  },
  {
    id: '28',
    name: 'Brunei',
    code: 'bn',
    capital: 'Bandar Seri Begawan',
    difficulty: 'Orta',
    location: {
      lat: 4.9031,
      lng: 114.9398
    }
  },
  {
    id: '29',
    name: 'Bolivya',
    code: 'bo',
    capital: 'La Paz',
    difficulty: 'Orta',
    location: {
      lat: -16.4897,
      lng: -68.1193
    }
  },
  {
    id: '30',
    name: 'Karayip Hollandası',
    code: 'bq',
    capital: 'Kralendijk',
    difficulty: 'Zor',
    location: {
      lat: 12.1784,
      lng: -68.2385
    }
  },
  {
    id: '31',
    name: 'Brezilya',
    code: 'br',
    capital: 'Brasília',
    difficulty: 'Kolay',
    location: {
      lat: -15.7801,
      lng: -47.9292
    }
  },
  {
    id: '32',
    name: 'Bahamalar',
    code: 'bs',
    capital: 'Nassau',
    difficulty: 'Orta',
    location: {
      lat: 25.0343,
      lng: -77.3963
    }
  },
  {
    id: '33',
    name: 'Butan',
    code: 'bt',
    capital: 'Thimphu',
    difficulty: 'Zor',
    location: {
      lat: 27.4728,
      lng: 89.6239
    }
  },
  {
    id: '34',
    name: 'Bouvet Adası',
    code: 'bv',
    capital: '-',
    difficulty: 'Zor',
    location: {
      lat: -54.4208,
      lng: 3.3464
    }
  },
  {
    id: '35',
    name: 'Botsvana',
    code: 'bw',
    capital: 'Gaborone',
    difficulty: 'Orta',
    location: {
      lat: -24.6282,
      lng: 25.9231
    }
  },
  {
    id: '36',
    name: 'Belarus',
    code: 'by',
    capital: 'Minsk',
    difficulty: 'Orta',
    location: {
      lat: 53.9045,
      lng: 27.5615
    }
  },
  {
    id: '37',
    name: 'Belize',
    code: 'bz',
    capital: 'Belmopan',
    difficulty: 'Zor',
    location: {
      lat: 17.2514,
      lng: -88.7705
    }
  },
  {
    id: '38',
    name: 'Kanada',
    code: 'ca',
    capital: 'Ottawa',
    difficulty: 'Kolay',
    location: {
      lat: 45.4215,
      lng: -75.6972
    }
  },
  {
    id: '39',
    name: 'Cocos (Keeling) Adaları',
    code: 'cc',
    capital: 'West Island',
    difficulty: 'Zor',
    location: {
      lat: -12.1642,
      lng: 96.8710
    }
  },
  {
    id: '40',
    name: 'Demokratik Kongo Cumhuriyeti',
    code: 'cd',
    capital: 'Kinşasa',
    difficulty: 'Orta',
    location: {
      lat: -4.4419,
      lng: 15.2663
    }
  },
  {
    id: '41',
    name: 'Orta Afrika Cumhuriyeti',
    code: 'cf',
    capital: 'Bangui',
    difficulty: 'Zor',
    location: {
      lat: 4.3947,
      lng: 18.5582
    }
  },
  {
    id: '42',
    name: 'Kongo Cumhuriyeti',
    code: 'cg',
    capital: 'Brazzaville',
    difficulty: 'Zor',
    location: {
      lat: -4.2634,
      lng: 15.2429
    }
  },
  {
    id: '43',
    name: 'İsviçre',
    code: 'ch',
    capital: 'Bern',
    difficulty: 'Kolay',
    location: {
      lat: 46.9480,
      lng: 7.4474
    }
  },
  {
    id: '44',
    name: 'Fildişi Sahili',
    code: 'ci',
    capital: 'Yamoussoukro',
    difficulty: 'Orta',
    location: {
      lat: 6.8276,
      lng: -5.2893
    }
  },
  {
    id: '45',
    name: 'Cook Adaları',
    code: 'ck',
    capital: 'Avarua',
    difficulty: 'Zor',
    location: {
      lat: -21.2367,
      lng: -159.7777
    }
  },
  {
    id: '46',
    name: 'Şili',
    code: 'cl',
    capital: 'Santiago',
    difficulty: 'Orta',
    location: {
      lat: -33.4489,
      lng: -70.6693
    }
  },
  {
    id: '47',
    name: 'Kamerun',
    code: 'cm',
    capital: 'Yaoundé',
    difficulty: 'Orta',
    location: {
      lat: 3.8480,
      lng: 11.5021
    }
  },
  {
    id: '48',
    name: 'Çin',
    code: 'cn',
    capital: 'Pekin',
    difficulty: 'Kolay',
    location: {
      lat: 39.9042,
      lng: 116.4074
    }
  },
  {
    id: '49',
    name: 'Kolombiya',
    code: 'co',
    capital: 'Bogotá',
    difficulty: 'Orta',
    location: {
      lat: 4.7110,
      lng: -74.0721
    }
  },
  {
    id: '50',
    name: 'Kosta Rika',
    code: 'cr',
    capital: 'San José',
    difficulty: 'Orta',
    location: {
      lat: 9.9281,
      lng: -84.0907
    }
  },
  {
    id: '51',
    name: 'Cabo Verde',
    code: 'cv',
    capital: 'Praia',
    difficulty: 'Zor',
    location: {
      lat: 14.9315,
      lng: -23.5087
    }
  },
  {
    id: '52',
    name: 'Curaçao',
    code: 'cw',
    capital: 'Willemstad',
    difficulty: 'Zor',
    location: {
      lat: 12.1696,
      lng: -68.9900
    }
  },
  {
    id: '53',
    name: 'Christmas Adası',
    code: 'cx',
    capital: 'Flying Fish Cove',
    difficulty: 'Zor',
    location: {
      lat: -10.4475,
      lng: 105.6904
    }
  },
  {
    id: '54',
    name: 'Kıbrıs',
    code: 'cy',
    capital: 'Lefkoşa',
    difficulty: 'Orta',
    location: {
      lat: 35.1856,
      lng: 33.3823
    }
  },
  {
    id: '55',
    name: 'Çekya',
    code: 'cz',
    capital: 'Prag',
    difficulty: 'Orta',
    location: {
      lat: 50.0755,
      lng: 14.4378
    }
  },
  {
    id: '56',
    name: 'Almanya',
    code: 'de',
    capital: 'Berlin',
    difficulty: 'Kolay',
    location: {
      lat: 52.5200,
      lng: 13.4050
    }
  },
  {
    id: '57',
    name: 'Cibuti',
    code: 'dj',
    capital: 'Cibuti',
    difficulty: 'Zor',
    location: {
      lat: 11.5886,
      lng: 43.1450
    }
  },
  {
    id: '58',
    name: 'Danimarka',
    code: 'dk',
    capital: 'Kopenhag',
    difficulty: 'Kolay',
    location: {
      lat: 55.6761,
      lng: 12.5683
    }
  },
  {
    id: '59',
    name: 'Dominika',
    code: 'dm',
    capital: 'Roseau',
    difficulty: 'Zor',
    location: {
      lat: 15.3010,
      lng: -61.3870
    }
  },
  {
    id: '60',
    name: 'Dominik Cumhuriyeti',
    code: 'do',
    capital: 'Santo Domingo',
    difficulty: 'Orta',
    location: {
      lat: 18.4861,
      lng: -69.9312
    }
  },
  {
    id: '61',
    name: 'Cezayir',
    code: 'dz',
    capital: 'Cezayir',
    difficulty: 'Orta',
    location: {
      lat: 36.7538,
      lng: 3.0588
    }
  },
  {
    id: '62',
    name: 'Ekvador',
    code: 'ec',
    capital: 'Quito',
    difficulty: 'Orta',
    location: {
      lat: -0.2299,
      lng: -78.5249
    }
  },
  {
    id: '63',
    name: 'Estonya',
    code: 'ee',
    capital: 'Tallinn',
    difficulty: 'Orta',
    location: {
      lat: 59.4370,
      lng: 24.7536
    }
  },
  {
    id: '64',
    name: 'Mısır',
    code: 'eg',
    capital: 'Kahire',
    difficulty: 'Orta',
    location: {
      lat: 30.0444,
      lng: 31.2357
    }
  },
  {
    id: '65',
    name: 'Batı Sahra',
    code: 'eh',
    capital: 'El Aaiún',
    difficulty: 'Zor',
    location: {
      lat: 27.1536,
      lng: -13.2033
    }
  },
  {
    id: '66',
    name: 'Eritre',
    code: 'er',
    capital: 'Asmara',
    difficulty: 'Zor',
    location: {
      lat: 15.3229,
      lng: 38.9251
    }
  },
  {
    id: '67',
    name: 'İspanya',
    code: 'es',
    capital: 'Madrid',
    difficulty: 'Kolay',
    location: {
      lat: 40.4168,
      lng: -3.7038
    }
  },
  {
    id: '68',
    name: 'Etiyopya',
    code: 'et',
    capital: 'Addis Ababa',
    difficulty: 'Orta',
    location: {
      lat: 9.0320,
      lng: 38.7492
    }
  },
  {
    id: '69',
    name: 'Finlandiya',
    code: 'fi',
    capital: 'Helsinki',
    difficulty: 'Kolay',
    location: {
      lat: 60.1699,
      lng: 24.9384
    }
  },
  {
    id: '70',
    name: 'Fiji',
    code: 'fj',
    capital: 'Suva',
    difficulty: 'Zor',
    location: {
      lat: -18.1416,
      lng: 178.4419
    }
  },
  {
    id: '71',
    name: 'Falkland Adaları',
    code: 'fk',
    capital: 'Stanley',
    difficulty: 'Zor',
    location: {
      lat: -51.7963,
      lng: -59.5236
    }
  },
  {
    id: '72',
    name: 'Mikronezya',
    code: 'fm',
    capital: 'Palikir',
    difficulty: 'Zor',
    location: {
      lat: 6.9248,
      lng: 158.1618
    }
  },
  {
    id: '73',
    name: 'Faroe Adaları',
    code: 'fo',
    capital: 'Tórshavn',
    difficulty: 'Zor',
    location: {
      lat: 62.0079,
      lng: -6.7916
    }
  },
  {
    id: '74',
    name: 'Fransa',
    code: 'fr',
    capital: 'Paris',
    difficulty: 'Kolay',
    location: {
      lat: 48.8566,
      lng: 2.3522
    }
  },
  {
    id: '75',
    name: 'Gabon',
    code: 'ga',
    capital: 'Libreville',
    difficulty: 'Zor',
    location: {
      lat: 0.4162,
      lng: 9.4673
    }
  },
  {
    id: '76',
    name: 'İngiltere',
    code: 'gb-eng',
    capital: 'Londra',
    difficulty: 'Kolay',
    location: {
      lat: 51.5074,
      lng: -0.1278
    }
  },
  {
    id: '77',
    name: 'Kuzey İrlanda',
    code: 'gb-nir',
    capital: 'Belfast',
    difficulty: 'Orta',
    location: {
      lat: 54.5973,
      lng: -5.9301
    }
  },
  {
    id: '78',
    name: 'İskoçya',
    code: 'gb-sct',
    capital: 'Edinburgh',
    difficulty: 'Orta',
    location: {
      lat: 55.9533,
      lng: -3.1883
    }
  },
  {
    id: '79',
    name: 'Galler',
    code: 'gb-wls',
    capital: 'Cardiff',
    difficulty: 'Orta',
    location: {
      lat: 51.4837,
      lng: -3.1681
    }
  },
  {
    id: '80',
    name: 'Birleşik Krallık',
    code: 'gb',
    capital: 'Londra',
    difficulty: 'Kolay',
    location: {
      lat: 51.5074,
      lng: -0.1278
    }
  },
  {
    id: '81',
    name: 'Grenada',
    code: 'gd',
    capital: "St. George's",
    difficulty: 'Zor',
    location: {
      lat: 12.0564,
      lng: -61.7485
    }
  },
  {
    id: '82',
    name: 'Gürcistan',
    code: 'ge',
    capital: 'Tiflis',
    difficulty: 'Orta',
    location: {
      lat: 41.7151,
      lng: 44.8271
    }
  },
  {
    id: '83',
    name: 'Fransız Guyanası',
    code: 'gf',
    capital: 'Cayenne',
    difficulty: 'Zor',
    location: {
      lat: 4.9371,
      lng: -52.3364
    }
  },
  {
    id: '84',
    name: 'Guernsey',
    code: 'gg',
    capital: 'Saint Peter Port',
    difficulty: 'Zor',
    location: {
      lat: 49.4542,
      lng: -2.5374
    }
  },
  {
    id: '85',
    name: 'Gana',
    code: 'gh',
    capital: 'Akra',
    difficulty: 'Orta',
    location: {
      lat: 5.5600,
      lng: -0.2057
    }
  },
  {
    id: '86',
    name: 'Cebelitarık',
    code: 'gi',
    capital: 'Cebelitarık',
    difficulty: 'Zor',
    location: {
      lat: 36.1408,
      lng: -5.3536
    }
  },
  {
    id: '87',
    name: 'Grönland',
    code: 'gl',
    capital: 'Nuuk',
    difficulty: 'Orta',
    location: {
      lat: 64.1814,
      lng: -51.6941
    }
  },
  {
    id: '88',
    name: 'Gambiya',
    code: 'gm',
    capital: 'Banjul',
    difficulty: 'Zor',
    location: {
      lat: 13.4549,
      lng: -16.5790
    }
  },
  {
    id: '89',
    name: 'Gine',
    code: 'gn',
    capital: 'Konakri',
    difficulty: 'Zor',
    location: {
      lat: 9.5370,
      lng: -13.6785
    }
  },
  {
    id: '90',
    name: 'Guadeloupe',
    code: 'gp',
    capital: 'Basse-Terre',
    difficulty: 'Zor',
    location: {
      lat: 16.2650,
      lng: -61.5510
    }
  },
  {
    id: '91',
    name: 'Hong Kong',
    code: 'hk',
    capital: 'Hong Kong',
    difficulty: 'Orta',
    location: {
      lat: 22.3193,
      lng: 114.1694
    }
  },
  {
    id: '92',
    name: 'Heard Adası ve McDonald Adaları',
    code: 'hm',
    capital: '-',
    difficulty: 'Zor',
    location: {
      lat: -53.0818,
      lng: 73.5042
    }
  },
  {
    id: '93',
    name: 'Honduras',
    code: 'hn',
    capital: 'Tegucigalpa',
    difficulty: 'Orta',
    location: {
      lat: 14.0723,
      lng: -87.1921
    }
  },
  {
    id: '94',
    name: 'Hırvatistan',
    code: 'hr',
    capital: 'Zagreb',
    difficulty: 'Orta',
    location: {
      lat: 45.8150,
      lng: 15.9819
    }
  },
  {
    id: '95',
    name: 'Haiti',
    code: 'ht',
    capital: 'Port-au-Prince',
    difficulty: 'Orta',
    location: {
      lat: 18.5944,
      lng: -72.3074
    }
  },
  {
    id: '96',
    name: 'Macaristan',
    code: 'hu',
    capital: 'Budapeşte',
    difficulty: 'Orta',
    location: {
      lat: 47.4979,
      lng: 19.0402
    }
  },
  {
    id: '97',
    name: 'Endonezya',
    code: 'id',
    capital: 'Jakarta',
    difficulty: 'Kolay',
    location: {
      lat: -6.2088,
      lng: 106.8456
    }
  },
  {
    id: '98',
    name: 'İrlanda',
    code: 'ie',
    capital: 'Dublin',
    difficulty: 'Kolay',
    location: {
      lat: 53.3498,
      lng: -6.2603
    }
  },
  {
    id: '99',
    name: 'İsprail',
    code: 'il',
    capital: 'Kudüs',
    difficulty: 'Orta',
    location: {
      lat: 31.7683,
      lng: 35.2137
    }
  },
  {
    id: '100',
    name: 'Man Adası',
    code: 'im',
    capital: 'Douglas',
    difficulty: 'Zor',
    location: {
      lat: 54.1509,
      lng: -4.4815
    }
  },
  {
    id: '101',
    name: 'Hindistan',
    code: 'in',
    capital: 'Yeni Delhi',
    difficulty: 'Kolay',
    location: {
      lat: 28.6139,
      lng: 77.2090
    }
  },
  {
    id: '102',
    name: 'İngiliz Hint Okyanusu Toprakları',
    code: 'io',
    capital: 'Diego Garcia',
    difficulty: 'Zor',
    location: {
      lat: -7.3195,
      lng: 72.4229
    }
  },
  {
    id: '103',
    name: 'Irak',
    code: 'iq',
    capital: 'Bağdat',
    difficulty: 'Orta',
    location: {
      lat: 33.3152,
      lng: 44.3661
    }
  },
  {
    id: '104',
    name: 'İran',
    code: 'ir',
    capital: 'Tahran',
    difficulty: 'Orta',
    location: {
      lat: 35.6892,
      lng: 51.3890
    }
  },
  {
    id: '105',
    name: 'İzlanda',
    code: 'is',
    capital: 'Reykjavik',
    difficulty: 'Orta',
    location: {
      lat: 64.1265,
      lng: -21.8174
    }
  },
  {
    id: '106',
    name: 'İtalya',
    code: 'it',
    capital: 'Roma',
    difficulty: 'Kolay',
    location: {
      lat: 41.9028,
      lng: 12.4964
    }
  },
  {
    id: '107',
    name: 'Jersey',
    code: 'je',
    capital: 'Saint Helier',
    difficulty: 'Zor',
    location: {
      lat: 49.1919,
      lng: -2.1071
    }
  },
  {
    id: '108',
    name: 'Jamaika',
    code: 'jm',
    capital: 'Kingston',
    difficulty: 'Orta',
    location: {
      lat: 18.0179,
      lng: -76.8099
    }
  },
  {
    id: '109',
    name: 'Ürdün',
    code: 'jo',
    capital: 'Amman',
    difficulty: 'Orta',
    location: {
      lat: 31.9454,
      lng: 35.9284
    }
  },
  {
    id: '110',
    name: 'Japonya',
    code: 'jp',
    capital: 'Tokyo',
    difficulty: 'Kolay',
    location: {
      lat: 35.6762,
      lng: 139.6503
    }
  },
  {
    id: '111',
    name: 'Kenya',
    code: 'ke',
    capital: 'Nairobi',
    difficulty: 'Orta',
    location: {
      lat: -1.2921,
      lng: 36.8219
    }
  },
  {
    id: '112',
    name: 'Kırgızistan',
    code: 'kg',
    capital: 'Bişkek',
    difficulty: 'Zor',
    location: {
      lat: 42.8746,
      lng: 74.5698
    }
  },
  {
    id: '113',
    name: 'Kamboçya',
    code: 'kh',
    capital: 'Phnom Penh',
    difficulty: 'Orta',
    location: {
      lat: 11.5564,
      lng: 104.9282
    }
  },
  {
    id: '114',
    name: 'Kiribati',
    code: 'ki',
    capital: 'Tarawa',
    difficulty: 'Zor',
    location: {
      lat: 1.3282,
      lng: 172.9784
    }
  },
  {
    id: '115',
    name: 'Komorlar',
    code: 'km',
    capital: 'Moroni',
    difficulty: 'Zor',
    location: {
      lat: -11.7172,
      lng: 43.2473
    }
  },
  {
    id: '116',
    name: 'Saint Kitts ve Nevis',
    code: 'kn',
    capital: 'Basseterre',
    difficulty: 'Zor',
    location: {
      lat: 17.3026,
      lng: -62.7177
    }
  },
  {
    id: '117',
    name: 'Kuzey Kore',
    code: 'kp',
    capital: 'Pyongyang',
    difficulty: 'Orta',
    location: {
      lat: 39.0392,
      lng: 125.7625
    }
  },
  {
    id: '118',
    name: 'Güney Kore',
    code: 'kr',
    capital: 'Seul',
    difficulty: 'Kolay',
    location: {
      lat: 37.5665,
      lng: 126.9780
    }
  },
  {
    id: '119',
    name: 'Kuveyt',
    code: 'kw',
    capital: 'Kuveyt',
    difficulty: 'Orta',
    location: {
      lat: 29.3759,
      lng: 47.9774
    }
  },
  {
    id: '120',
    name: 'Cayman Adaları',
    code: 'ky',
    capital: 'George Town',
    difficulty: 'Zor',
    location: {
      lat: 19.2869,
      lng: -81.3267
    }
  },
  {
    id: '121',
    name: 'Laos',
    code: 'la',
    capital: 'Vientiane',
    difficulty: 'Zor',
    location: {
      lat: 17.9757,
      lng: 102.6331
    }
  },
  {
    id: '122',
    name: 'Lübnan',
    code: 'lb',
    capital: 'Beyrut',
    difficulty: 'Orta',
    location: {
      lat: 33.8938,
      lng: 35.5018
    }
  },
  {
    id: '123',
    name: 'Saint Lucia',
    code: 'lc',
    capital: 'Castries',
    difficulty: 'Zor',
    location: {
      lat: 14.0101,
      lng: -60.9875
    }
  },
  {
    id: '124',
    name: 'Lihtenştayn',
    code: 'li',
    capital: 'Vaduz',
    difficulty: 'Zor',
    location: {
      lat: 47.1410,
      lng: 9.5209
    }
  },
  {
    id: '125',
    name: 'Sri Lanka',
    code: 'lk',
    capital: 'Sri Jayawardenepura Kotte',
    difficulty: 'Orta',
    location: {
      lat: 6.9271,
      lng: 79.8612
    }
  },
  {
    id: '126',
    name: 'Liberya',
    code: 'lr',
    capital: 'Monrovia',
    difficulty: 'Zor',
    location: {
      lat: 6.2907,
      lng: -10.7605
    }
  },
  {
    id: '127',
    name: 'Lesotho',
    code: 'ls',
    capital: 'Maseru',
    difficulty: 'Zor',
    location: {
      lat: -29.3142,
      lng: 27.4833
    }
  },
  {
    id: '128',
    name: 'Litvanya',
    code: 'lt',
    capital: 'Vilnius',
    difficulty: 'Orta',
    location: {
      lat: 54.6872,
      lng: 25.2797
    }
  },
  {
    id: '129',
    name: 'Lüksemburg',
    code: 'lu',
    capital: 'Lüksemburg',
    difficulty: 'Orta',
    location: {
      lat: 49.6116,
      lng: 6.1319
    }
  },
  {
    id: '130',
    name: 'Letonya',
    code: 'lv',
    capital: 'Riga',
    difficulty: 'Orta',
    location: {
      lat: 56.9496,
      lng: 24.1052
    }
  },
  {
    id: '131',
    name: 'Libya',
    code: 'ly',
    capital: 'Trablus',
    difficulty: 'Orta',
    location: {
      lat: 32.8872,
      lng: 13.1913
    }
  },
  {
    id: '132',
    name: 'Fas',
    code: 'ma',
    capital: 'Rabat',
    difficulty: 'Orta',
    location: {
      lat: 34.0209,
      lng: -6.8416
    }
  },
  {
    id: '133',
    name: 'Monako',
    code: 'mc',
    capital: 'Monako',
    difficulty: 'Orta',
    location: {
      lat: 43.7384,
      lng: 7.4246
    }
  },
  {
    id: '134',
    name: 'Moldova',
    code: 'md',
    capital: 'Kişinev',
    difficulty: 'Orta',
    location: {
      lat: 47.0105,
      lng: 28.8638
    }
  },
  {
    id: '135',
    name: 'Karadağ',
    code: 'me',
    capital: 'Podgorica',
    difficulty: 'Orta',
    location: {
      lat: 42.4304,
      lng: 19.2594
    }
  },
  {
    id: '136',
    name: 'Saint Martin',
    code: 'mf',
    capital: 'Marigot',
    difficulty: 'Zor',
    location: {
      lat: 18.0708,
      lng: -63.0501
    }
  },
  {
    id: '137',
    name: 'Madagaskar',
    code: 'mg',
    capital: 'Antananarivo',
    difficulty: 'Orta',
    location: {
      lat: -18.8792,
      lng: 47.5079
    }
  },
  {
    id: '138',
    name: 'Marshall Adaları',
    code: 'mh',
    capital: 'Majuro',
    difficulty: 'Zor',
    location: {
      lat: 7.1164,
      lng: 171.1854
    }
  },
  {
    id: '139',
    name: 'Kuzey Makedonya',
    code: 'mk',
    capital: 'Üsküp',
    difficulty: 'Orta',
    location: {
      lat: 41.9973,
      lng: 21.4280
    }
  },
  {
    id: '140',
    name: 'Mali',
    code: 'ml',
    capital: 'Bamako',
    difficulty: 'Zor',
    location: {
      lat: 12.6392,
      lng: -8.0029
    }
  },
  {
    id: '141',
    name: 'Moğolistan',
    code: 'mn',
    capital: 'Ulan Batur',
    difficulty: 'Orta',
    location: {
      lat: 47.8864,
      lng: 106.9057
    }
  },
  {
    id: '142',
    name: 'Makao',
    code: 'mo',
    capital: 'Makao',
    difficulty: 'Zor',
    location: {
      lat: 22.1987,
      lng: 113.5439
    }
  },
  {
    id: '143',
    name: 'Kuzey Mariana Adaları',
    code: 'mp',
    capital: 'Saipan',
    difficulty: 'Zor',
    location: {
      lat: 15.2123,
      lng: 145.7545
    }
  },
  {
    id: '144',
    name: 'Martinik',
    code: 'mq',
    capital: 'Fort-de-France',
    difficulty: 'Zor',
    location: {
      lat: 14.6415,
      lng: -61.0242
    }
  },
  {
    id: '145',
    name: 'Moritanya',
    code: 'mr',
    capital: 'Nouakchott',
    difficulty: 'Zor',
    location: {
      lat: 18.0735,
      lng: -15.9582
    }
  },
  {
    id: '146',
    name: 'Montserrat',
    code: 'ms',
    capital: 'Plymouth',
    difficulty: 'Zor',
    location: {
      lat: 16.7425,
      lng: -62.1874
    }
  },
  {
    id: '147',
    name: 'Malta',
    code: 'mt',
    capital: 'Valletta',
    difficulty: 'Orta',
    location: {
      lat: 35.8989,
      lng: 14.5146
    }
  },
  {
    id: '148',
    name: 'Mauritius',
    code: 'mu',
    capital: 'Port Louis',
    difficulty: 'Orta',
    location: {
      lat: -20.1609,
      lng: 57.5012
    }
  },
  {
    id: '149',
    name: 'Maldivler',
    code: 'mv',
    capital: 'Male',
    difficulty: 'Orta',
    location: {
      lat: 4.1755,
      lng: 73.5093
    }
  },
  {
    id: '150',
    name: 'Malavi',
    code: 'mw',
    capital: 'Lilongwe',
    difficulty: 'Zor',
    location: {
      lat: -13.9631,
      lng: 33.7741
    }
  },
  {
    id: '151',
    name: 'Meksika',
    code: 'mx',
    capital: 'Mexico City',
    difficulty: 'Kolay',
    location: {
      lat: 19.4326,
      lng: -99.1332
    }
  },
  {
    id: '152',
    name: 'Malezya',
    code: 'my',
    capital: 'Kuala Lumpur',
    difficulty: 'Orta',
    location: {
      lat: 3.1390,
      lng: 101.6869
    }
  },
  {
    id: '153',
    name: 'Mozambik',
    code: 'mz',
    capital: 'Maputo',
    difficulty: 'Zor',
    location: {
      lat: -25.9692,
      lng: 32.5732
    }
  },
  {
    id: '154',
    name: 'Namibya',
    code: 'na',
    capital: 'Windhoek',
    difficulty: 'Zor',
    location: {
      lat: -22.5609,
      lng: 17.0658
    }
  },
  {
    id: '155',
    name: 'Yeni Kaledonya',
    code: 'nc',
    capital: 'Nouméa',
    difficulty: 'Zor',
    location: {
      lat: -22.2763,
      lng: 166.4572
    }
  },
  {
    id: '156',
    name: 'Nijer',
    code: 'ne',
    capital: 'Niamey',
    difficulty: 'Zor',
    location: {
      lat: 13.5137,
      lng: 2.1098
    }
  },
  {
    id: '157',
    name: 'Norfolk Adası',
    code: 'nf',
    capital: 'Kingston',
    difficulty: 'Zor',
    location: {
      lat: -29.0408,
      lng: 167.9547
    }
  },
  {
    id: '158',
    name: 'Nijerya',
    code: 'ng',
    capital: 'Abuja',
    difficulty: 'Orta',
    location: {
      lat: 9.0765,
      lng: 7.3986
    }
  },
  {
    id: '159',
    name: 'Nikaragua',
    code: 'ni',
    capital: 'Managua',
    difficulty: 'Orta',
    location: {
      lat: 12.1149,
      lng: -86.2362
    }
  },
  {
    id: '160',
    name: 'Hollanda',
    code: 'nl',
    capital: 'Amsterdam',
    difficulty: 'Kolay',
    location: {
      lat: 52.3676,
      lng: 4.9041
    }
  },
  {
    id: '161',
    name: 'Solomon Adaları',
    code: 'sb',
    capital: 'Honiara',
    difficulty: 'Zor',
    location: {
      lat: -9.4438,
      lng: 159.9498
    }
  },
  {
    id: '162',
    name: 'Seyşeller',
    code: 'sc',
    capital: 'Victoria',
    difficulty: 'Zor',
    location: {
      lat: -4.6191,
      lng: 55.4513
    }
  },
  {
    id: '163',
    name: 'Sudan',
    code: 'sd',
    capital: 'Hartum',
    difficulty: 'Orta',
    location: {
      lat: 15.5007,
      lng: 32.5599
    }
  },
  {
    id: '164',
    name: 'İsveç',
    code: 'se',
    capital: 'Stockholm',
    difficulty: 'Kolay',
    location: {
      lat: 59.3293,
      lng: 18.0686
    }
  },
  {
    id: '165',
    name: 'Singapur',
    code: 'sg',
    capital: 'Singapur',
    difficulty: 'Orta',
    location: {
      lat: 1.3521,
      lng: 103.8198
    }
  },
  {
    id: '166',
    name: 'Saint Helena',
    code: 'sh',
    capital: 'Jamestown',
    difficulty: 'Zor',
    location: {
      lat: -15.9650,
      lng: -5.7089
    }
  },
  {
    id: '167',
    name: 'Slovenya',
    code: 'si',
    capital: 'Ljubljana',
    difficulty: 'Orta',
    location: {
      lat: 46.0569,
      lng: 14.5058
    }
  },
  {
    id: '168',
    name: 'Svalbard ve Jan Mayen',
    code: 'sj',
    capital: 'Longyearbyen',
    difficulty: 'Zor',
    location: {
      lat: 78.2232,
      lng: 15.6267
    }
  },
  {
    id: '169',
    name: 'Slovakya',
    code: 'sk',
    capital: 'Bratislava',
    difficulty: 'Orta',
    location: {
      lat: 48.1486,
      lng: 17.1077
    }
  },
  {
    id: '170',
    name: 'Sierra Leone',
    code: 'sl',
    capital: 'Freetown',
    difficulty: 'Zor',
    location: {
      lat: 8.4847,
      lng: -13.2343
    }
  },
  {
    id: '181',
    name: 'San Marino',
    code: 'sm',
    capital: 'San Marino',
    difficulty: 'Zor',
    location: {
      lat: 43.9424,
      lng: 12.4578
    }
  },
  {
    id: '182',
    name: 'Senegal',
    code: 'sn',
    capital: 'Dakar',
    difficulty: 'Orta',
    location: {
      lat: 14.7167,
      lng: -17.4677
    }
  },
  {
    id: '183',
    name: 'Somali',
    code: 'so',
    capital: 'Mogadişu',
    difficulty: 'Zor',
    location: {
      lat: 2.0469,
      lng: 45.3182
    }
  },
  {
    id: '184',
    name: 'Surinam',
    code: 'sr',
    capital: 'Paramaribo',
    difficulty: 'Zor',
    location: {
      lat: 5.8520,
      lng: -55.2038
    }
  },
  {
    id: '185',
    name: 'Güney Sudan',
    code: 'ss',
    capital: 'Juba',
    difficulty: 'Zor',
    location: {
      lat: 4.8594,
      lng: 31.5713
    }
  },
  {
    id: '186',
    name: 'São Tomé ve Príncipe',
    code: 'st',
    capital: 'São Tomé',
    difficulty: 'Zor',
    location: {
      lat: 0.3302,
      lng: 6.7333
    }
  },
  {
    id: '187',
    name: 'El Salvador',
    code: 'sv',
    capital: 'San Salvador',
    difficulty: 'Orta',
    location: {
      lat: 13.6929,
      lng: -89.2182
    }
  },
  {
    id: '188',
    name: 'Sint Maarten',
    code: 'sx',
    capital: 'Philipsburg',
    difficulty: 'Zor',
    location: {
      lat: 18.0425,
      lng: -63.0548
    }
  },
  {
    id: '189',
    name: 'Suriye',
    code: 'sy',
    capital: 'Şam',
    difficulty: 'Orta',
    location: {
      lat: 33.5138,
      lng: 36.2765
    }
  },
  {
    id: '190',
    name: 'Esvatini',
    code: 'sz',
    capital: 'Mbabane',
    difficulty: 'Zor',
    location: {
      lat: -26.3054,
      lng: 31.1367
    }
  },
  {
    id: '191',
    name: 'Turks ve Caicos Adaları',
    code: 'tc',
    capital: 'Cockburn Town',
    difficulty: 'Zor',
    location: {
      lat: 21.4664,
      lng: -71.1389
    }
  },
  {
    id: '192',
    name: 'Çad',
    code: 'td',
    capital: "N'Djamena",
    difficulty: 'Zor',
    location: {
      lat: 12.1348,
      lng: 15.0557
    }
  },
  {
    id: '193',
    name: 'Fransız Güney Toprakları',
    code: 'tf',
    capital: 'Port-aux-Français',
    difficulty: 'Zor',
    location: {
      lat: -49.3500,
      lng: 70.2167
    }
  },
  {
    id: '194',
    name: 'Togo',
    code: 'tg',
    capital: 'Lomé',
    difficulty: 'Zor',
    location: {
      lat: 6.1375,
      lng: 1.2123
    }
  },
  {
    id: '195',
    name: 'Tayland',
    code: 'th',
    capital: 'Bangkok',
    difficulty: 'Orta',
    location: {
      lat: 13.7563,
      lng: 100.5018
    }
  },
  {
    id: '196',
    name: 'Tacikistan',
    code: 'tj',
    capital: 'Duşanbe',
    difficulty: 'Zor',
    location: {
      lat: 38.5598,
      lng: 68.7870
    }
  },
  {
    id: '197',
    name: 'Tokelau',
    code: 'tk',
    capital: 'Fakaofo',
    difficulty: 'Zor',
    location: {
      lat: -9.2002,
      lng: -171.8484
    }
  },
  {
    id: '198',
    name: 'Doğu Timor',
    code: 'tl',
    capital: 'Dili',
    difficulty: 'Zor',
    location: {
      lat: -8.5586,
      lng: 125.5736
    }
  },
  {
    id: '199',
    name: 'Türkmenistan',
    code: 'tm',
    capital: 'Aşkabat',
    difficulty: 'Orta',
    location: {
      lat: 37.9601,
      lng: 58.3261
    }
  },
  {
    id: '200',
    name: 'Tunus',
    code: 'tn',
    capital: 'Tunus',
    difficulty: 'Orta',
    location: {
      lat: 36.8065,
      lng: 10.1815
    }
  },
  {
    id: '201',
    name: 'Tonga',
    code: 'to',
    capital: "Nuku'alofa",
    difficulty: 'Zor',
    location: {
      lat: -21.1393,
      lng: -175.2046
    }
  },
  {
    id: '202',
    name: 'Türkiye',
    code: 'tr',
    capital: 'Ankara',
    difficulty: 'Kolay',
    location: {
      lat: 39.9334,
      lng: 32.8597
    }
  },
  {
    id: '203',
    name: 'Trinidad ve Tobago',
    code: 'tt',
    capital: 'Port of Spain',
    difficulty: 'Orta',
    location: {
      lat: 10.6596,
      lng: -61.5019
    }
  },
  {
    id: '204',
    name: 'Tuvalu',
    code: 'tv',
    capital: 'Funafuti',
    difficulty: 'Zor',
    location: {
      lat: -8.5211,
      lng: 179.1985
    }
  },
  {
    id: '205',
    name: 'Tayvan',
    code: 'tw',
    capital: 'Taipei',
    difficulty: 'Orta',
    location: {
      lat: 25.0330,
      lng: 121.5654
    }
  },
  {
    id: '206',
    name: 'Tanzanya',
    code: 'tz',
    capital: 'Dodoma',
    difficulty: 'Orta',
    location: {
      lat: -6.1730,
      lng: 35.7419
    }
  },
  {
    id: '207',
    name: 'Ukrayna',
    code: 'ua',
    capital: 'Kiev',
    difficulty: 'Orta',
    location: {
      lat: 50.4501,
      lng: 30.5234
    }
  },
  {
    id: '208',
    name: 'Uganda',
    code: 'ug',
    capital: 'Kampala',
    difficulty: 'Orta',
    location: {
      lat: 0.3476,
      lng: 32.5825
    }
  },
  {
    id: '209',
    name: 'Amerika Birleşik Devletleri',
    code: 'us',
    capital: 'Washington, D.C.',
    difficulty: 'Kolay',
    location: {
      lat: 38.8951,
      lng: -77.0364
    }
  },
  {
    id: '210',
    name: 'Uruguay',
    code: 'uy',
    capital: 'Montevideo',
    difficulty: 'Orta',
    location: {
      lat: -34.9011,
      lng: -56.1645
    }
  },
  {
    id: '211',
    name: 'Özbekistan',
    code: 'uz',
    capital: 'Taşkent',
    difficulty: 'Orta',
    location: {
      lat: 41.2995,
      lng: 69.2401
    }
  },
  {
    id: '212',
    name: 'Vatikan',
    code: 'va',
    capital: 'Vatikan',
    difficulty: 'Orta',
    location: {
      lat: 41.9029,
      lng: 12.4534
    }
  },
  {
    id: '213',
    name: 'Saint Vincent ve Grenadinler',
    code: 'vc',
    capital: 'Kingstown',
    difficulty: 'Zor',
    location: {
      lat: 13.1587,
      lng: -61.2248
    }
  },
  {
    id: '214',
    name: 'Venezuela',
    code: 've',
    capital: 'Caracas',
    difficulty: 'Orta',
    location: {
      lat: 10.4806,
      lng: -66.9036
    }
  },
  {
    id: '215',
    name: 'İngiliz Virgin Adaları',
    code: 'vg',
    capital: 'Road Town',
    difficulty: 'Zor',
    location: {
      lat: 18.4207,
      lng: -64.6400
    }
  },
  {
    id: '216',
    name: 'ABD Virgin Adaları',
    code: 'vi',
    capital: 'Charlotte Amalie',
    difficulty: 'Zor',
    location: {
      lat: 18.3358,
      lng: -64.8963
    }
  },
  {
    id: '217',
    name: 'Vietnam',
    code: 'vn',
    capital: 'Hanoi',
    difficulty: 'Orta',
    location: {
      lat: 21.0285,
      lng: 105.8542
    }
  },
  {
    id: '218',
    name: 'Vanuatu',
    code: 'vu',
    capital: 'Port Vila',
    difficulty: 'Zor',
    location: {
      lat: -17.7334,
      lng: 168.3220
    }
  },
  {
    id: '219',
    name: 'Wallis ve Futuna',
    code: 'wf',
    capital: 'Mata-Utu',
    difficulty: 'Zor',
    location: {
      lat: -13.2827,
      lng: -176.1764
    }
  },
  {
    id: '220',
    name: 'Samoa',
    code: 'ws',
    capital: 'Apia',
    difficulty: 'Zor',
    location: {
      lat: -13.8506,
      lng: -171.7513
    }
  },
  {
    id: '221',
    name: 'Kosova',
    code: 'xk',
    capital: 'Priştine',
    difficulty: 'Orta',
    location: {
      lat: 42.6629,
      lng: 21.1655
    }
  },
  {
    id: '222',
    name: 'Yemen',
    code: 'ye',
    capital: 'Sana',
    difficulty: 'Orta',
    location: {
      lat: 15.3694,
      lng: 44.1910
    }
  },
  {
    id: '223',
    name: 'Mayotte',
    code: 'yt',
    capital: 'Mamoudzou',
    difficulty: 'Zor',
    location: {
      lat: -12.7806,
      lng: 45.2278
    }
  },
  {
    id: '224',
    name: 'Güney Afrika',
    code: 'za',
    capital: 'Pretoria',
    difficulty: 'Orta',
    location: {
      lat: -25.7461,
      lng: 28.1881
    }
  },
  {
    id: '225',
    name: 'Zambiya',
    code: 'zm',
    capital: 'Lusaka',
    difficulty: 'Zor',
    location: {
      lat: -15.3875,
      lng: 28.3228
    }
  },
  {
    id: '226',
    name: 'Zimbabve',
    code: 'zw',
    capital: 'Harare',
    difficulty: 'Zor',
    location: {
      lat: -17.8292,
      lng: 31.0522
    }
  },
  {
    id: '227',
    name: 'Norveç',
    code: 'no',
    capital: 'Oslo',
    difficulty: 'Kolay',
    location: {
      lat: 59.9139,
      lng: 10.7522
    }
  },
  {
    id: '228',
    name: 'Nepal',
    code: 'np',
    capital: 'Katmandu',
    difficulty: 'Orta',
    location: {
      lat: 27.7172,
      lng: 85.3240
    }
  },
  {
    id: '229',
    name: 'Nauru',
    code: 'nr',
    capital: 'Yaren',
    difficulty: 'Zor',
    location: {
      lat: -0.5228,
      lng: 166.9315
    }
  },
  {
    id: '230',
    name: 'Niue',
    code: 'nu',
    capital: 'Alofi',
    difficulty: 'Zor',
    location: {
      lat: -19.0544,
      lng: -169.8672
    }
  },
  {
    id: '231',
    name: 'Yeni Zelanda',
    code: 'nz',
    capital: 'Wellington',
    difficulty: 'Orta',
    location: {
      lat: -41.2866,
      lng: 174.7756
    }
  },
  {
    id: '232',
    name: 'Peru',
    code: 'pe',
    capital: 'Lima',
    difficulty: 'Orta',
    location: {
      lat: -12.0464,
      lng: -77.0428
    }
  },
  {
    id: '233',
    name: 'Fransız Polinezyası',
    code: 'pf',
    capital: 'Papeete',
    difficulty: 'Zor',
    location: {
      lat: -17.5516,
      lng: -149.5584
    }
  },
  {
    id: '234',
    name: 'Faroe Adaları',
    code: 'fo',
    capital: 'Tórshavn',
    difficulty: 'Zor',
    location: {
      lat: 62.0079,
      lng: -6.7916
    }
  },
  {
    id: '235',
    name: 'Falkland Adaları',
    code: 'fk',
    capital: 'Stanley',
    difficulty: 'Zor',
    location: {
      lat: -51.7963,
      lng: -57.8517
    }
  },
  {
    id: '236',
    name: 'Åland Adaları',
    code: 'ax',
    capital: 'Mariehamn',
    difficulty: 'Zor',
    location: {
      lat: 60.1785,
      lng: 19.9156
    }
  },
  {
    id: '237',
    name: 'Batı Sahra',
    code: 'eh',
    capital: 'El Aaiún',
    difficulty: 'Zor',
    location: {
      lat: 27.1536,
      lng: -13.2033
    }
  }
].sort((a, b) => a.name.localeCompare(b.name, 'tr'))
.map((country, index) => {
  let difficulty: Difficulty;
  switch(country.difficulty) {
    case 'easy':
    case 'Kolay':
      difficulty = 'Kolay';
      break;
    case 'medium':
    case 'Orta':
      difficulty = 'Orta';
      break;
    case 'hard':
    case 'Zor':
      difficulty = 'Zor';
      break;
    default:
      difficulty = 'Zor';
  }
  
  return {
    ...country,
    id: String(index + 1),
    difficulty
  };
});

export default allCountries;