import React, { createContext, useState, useContext, useEffect } from 'react';
import { allCountries } from '../data/allCountries';
import { Country } from '../types';

interface CountryContextType {
  countries: Country[];
  setCountries: (countries: Country[]) => void;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const CountryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [countries, setCountries] = useState<Country[]>(() => {
    const saved = localStorage.getItem('countries');
    return saved ? JSON.parse(saved) : allCountries;
  });

  useEffect(() => {
    localStorage.setItem('countries', JSON.stringify(countries));
  }, [countries]);

  return (
    <CountryContext.Provider value={{ countries, setCountries }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountries = () => {
  const context = useContext(CountryContext);
  if (context === undefined) {
    throw new Error('useCountries must be used within a CountryProvider');
  }
  return context;
}; 