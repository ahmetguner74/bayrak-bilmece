import { Country } from '../types';

export const countries: Country[] = [
  // EASY (Yaygın olarak bilinen ülkeler)
  {
    id: '1',
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
    id: '2',
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
    id: '3',
    name: 'İngiltere',
    code: 'gb',
    capital: 'Londra',
    difficulty: 'Kolay',
    location: {
      lat: 51.5074,
      lng: -0.1278
    }
  },
  {
    id: '4',
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
    id: '5',
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
    id: '6',
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
    id: '7',
    name: 'Japonya',
    code: 'jp',
    capital: 'Tokyo',
    difficulty: 'Orta',
    location: {
      lat: 35.6762,
      lng: 139.6503
    }
  },
  {
    id: '8',
    name: 'Güney Kore',
    code: 'kr',
    capital: 'Seul',
    difficulty: 'Orta',
    location: {
      lat: 37.5665,
      lng: 126.9780
    }
  },
  {
    id: '9',
    name: 'Brezilya',
    code: 'br',
    capital: 'Brasília',
    difficulty: 'Orta',
    location: {
      lat: -15.7975,
      lng: -47.8919
    }
  },
  {
    id: '10',
    name: 'Avustralya',
    code: 'au',
    capital: 'Canberra',
    difficulty: 'Orta',
    location: {
      lat: -35.2809,
      lng: 149.1300
    }
  },
  {
    id: '11',
    name: 'Kazakistan',
    code: 'kz',
    capital: 'Astana',
    difficulty: 'Zor',
    location: {
      lat: 51.1694,
      lng: 71.4491
    }
  },
  {
    id: '12',
    name: 'Uruguay',
    code: 'uy',
    capital: 'Montevideo',
    difficulty: 'Zor',
    location: {
      lat: -34.9011,
      lng: -56.1645
    }
  },
  {
    id: '13',
    name: 'Estonya',
    code: 'ee',
    capital: 'Tallinn',
    difficulty: 'Zor',
    location: {
      lat: 59.4370,
      lng: 24.7536
    }
  },
  {
    id: '14',
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
    id: '15',
    name: 'Bhutan',
    code: 'bt',
    capital: 'Thimphu',
    difficulty: 'Zor',
    location: {
      lat: 27.4716,
      lng: 89.6386
    }
  },
  // MEDIUM (Orta zorlukta ülkeler)
  {
    id: '20',
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
    id: '21',
    name: 'Güney Afrika',
    code: 'za',
    capital: 'Pretoria',
    difficulty: 'Orta',
    location: {
      lat: -25.7461,
      lng: 28.1881
    }
  },
  // HARD (Daha az bilinen ülkeler)
  {
    id: '40',
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
    id: '41',
    name: 'Kiribati',
    code: 'ki',
    capital: 'Tarawa',
    difficulty: 'Zor',
    location: {
      lat: 1.3382,
      lng: 173.0176
    }
  }
]; 