import axios from 'axios';
import { Country } from '../types';
import { firebaseApi } from './firebase';

// Firebase kullanımı için
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