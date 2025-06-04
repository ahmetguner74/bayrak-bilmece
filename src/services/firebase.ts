import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, set, child, Database } from 'firebase/database';
import { Country } from '../types';

// Firebase configuration should be provided via environment variables.
// Replace the placeholder values with your actual config when deploying.
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || 'demo',
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || 'demo',
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL || 'demo',
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || 'demo',
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || 'demo',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || 'demo',
  appId: process.env.REACT_APP_FIREBASE_APP_ID || 'demo'
};

let db: Database | null = null;

export const initializeDatabase = async (): Promise<void> => {
  if (db) return;
  const app = initializeApp(firebaseConfig);
  db = getDatabase(app);
};

export const firebaseApi = {
  getCountries: async (): Promise<Country[]> => {
    if (!db) await initializeDatabase();
    const snapshot = await get(child(ref(db!), 'countries'));
    return snapshot.val() || [];
  },

  updateCountries: async (countries: Country[]): Promise<void> => {
    if (!db) await initializeDatabase();
    await set(ref(db!, 'countries'), countries);
  }
};

