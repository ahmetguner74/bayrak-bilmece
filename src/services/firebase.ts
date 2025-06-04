import { Country } from '../types';

/**
 * Placeholder Firebase-like API that uses localStorage.
 * This avoids runtime errors when real Firebase configuration
 * is not available.
 */
export const initializeDatabase = async (): Promise<void> => {
  // Nothing to initialize for localStorage based fallback
  return Promise.resolve();
};

const STORAGE_KEY = 'countries';

export const firebaseApi = {
  getCountries: async (): Promise<Country[]> => {
    const data = window.localStorage.getItem(STORAGE_KEY);
    return data ? (JSON.parse(data) as Country[]) : [];
  },

  updateCountries: async (countries: Country[]): Promise<Country[]> => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(countries));
    return countries;
  }
};
