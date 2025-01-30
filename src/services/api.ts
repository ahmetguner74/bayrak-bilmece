import { firebaseApi } from './firebase';

// Sadece firebase api'yi kullanıyoruz
export const api = firebaseApi;

// Veya Express backend kullanımı için:
/*
const API_URL = 'http://localhost:3001';

export const api = {
  getCountries: async () => {
    const response = await axios.get<Country[]>(`${API_URL}/countries`);
    return response.data;
  },
  
  updateCountries: async (countries: Country[]) => {
    const response = await axios.put(`${API_URL}/countries`, countries);
    return response.data;
  }
};
*/ 