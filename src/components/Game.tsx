import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { useNavigate } from 'react-router-dom';
import { allCountries } from '../data/allCountries';
import { Country } from '../types';

const Game: React.FC = () => {
  const { state, dispatch } = useGame();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(15);
  const [currentCountry, setCurrentCountry] = useState<Country>(allCountries[0]);
  const [options, setOptions] = useState<string[]>([]);
  const [usedCountries, setUsedCountries] = useState<string[]>([]);

  useEffect(() => {
    const easyCountries = [
      'tr', 'no', 'mx', 'ca', 'jp', 'it', 'ch', 'se', 
      'es', 'ie', 'gb-eng', 'nl', 'in', 'kr', 'fr', 
      'fi', 'id', 'dk', 'cn', 'br', 'gb', 'be', 'at', 
      'au', 'us', 'de'
    ];

    const filteredCountries = allCountries.filter(c => {
      if (state.difficulty === 'Kolay') {
        return easyCountries.includes(c.code.toLowerCase());
      }
      return c.difficulty === state.difficulty;
    });

    const availableCountries = filteredCountries.filter(c => !usedCountries.includes(c.id));

    if (availableCountries.length === 0 || state.currentQuestion > 10) {
      dispatch({ type: 'GAME_OVER' });
      return;
    }

    const randomCountry = availableCountries[Math.floor(Math.random() * availableCountries.length)];
    setCurrentCountry(randomCountry);
    setUsedCountries(prev => [...prev, randomCountry.id]);

    const wrongOptions = filteredCountries
      .filter(c => c.id !== randomCountry.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(c => c.name);

    setOptions([...wrongOptions, randomCountry.name].sort(() => Math.random() - 0.5));
    setTimeLeft(15);
  }, [state.currentQuestion, state.difficulty]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          dispatch({ type: 'DECREASE_LIVES' });
          if (state.lives > 1) {
            dispatch({ type: 'NEXT_QUESTION' });
            return 15;
          } else {
            dispatch({ type: 'GAME_OVER' });
            return 0;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [state.currentQuestion, state.lives]);

  const handleAnswer = (answer: string) => {
    if (answer === currentCountry.name) {
      dispatch({ type: 'INCREASE_SCORE', payload: 10 });
    } else {
      dispatch({ type: 'DECREASE_LIVES' });
      if (state.lives <= 1) {
        dispatch({ type: 'GAME_OVER' });
        return;
      }
    }
    dispatch({ type: 'NEXT_QUESTION' });
  };

  if (state.isGameOver) {
    return (
      <div className="game-over">
        <h2>Oyun Bitti!</h2>
        <p>Skorunuz: {state.score}</p>
        <button onClick={() => navigate('/')}>Ana Menüye Dön</button>
      </div>
    );
  }

  return (
    <div className="game-container">
      <div className="game-header">
        <div className="lives">❤️ {state.lives}</div>
        <div className="question-count">Soru: {state.currentQuestion}/10</div>
        <div className="timer">Süre: {timeLeft}</div>
        <div className="score">Skor: {state.score}</div>
      </div>

      <div className="game-content">
        <div className="flag-container">
          <img 
            src={`/bayrak-bilmece/flags/${currentCountry.code.toLowerCase()}.png`} 
            alt="Ülke Bayrağı"
            className="flag-image"
          />
        </div>

        <div className="options">
          {options.map((option, index) => (
            <button 
              key={index}
              onClick={() => handleAnswer(option)}
              className="option-button"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game; 