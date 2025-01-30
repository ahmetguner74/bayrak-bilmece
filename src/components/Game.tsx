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
  const [showHintModal, setShowHintModal] = useState(false);
  const [showCapitalHint, setShowCapitalHint] = useState(false);
  const [usedHints, setUsedHints] = useState<string[]>([]);
  const [isPaused, setIsPaused] = useState(false);

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

    // Yeni soru yüklendiğinde ipucu durumlarını sıfırla
    setShowCapitalHint(false);
    setShowHintModal(false);
    setIsPaused(false);
  }, [state.currentQuestion, state.difficulty]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
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
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [state.currentQuestion, state.lives, isPaused]);

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

  const handleHintClick = () => {
    setIsPaused(true);
    setShowHintModal(true);
  };

  const handleHintClose = () => {
    setIsPaused(false);
    setShowHintModal(false);
  };

  const handleHintSelect = (hintType: string) => {
    if (!usedHints.includes(hintType) && state.hints > 0) {
      setIsPaused(false);
      setUsedHints([...usedHints, hintType]);
      dispatch({ type: 'USE_HINT' });
      
      if (hintType === 'capital') {
        setShowCapitalHint(true);
        setShowHintModal(false);
      } else if (hintType === 'fifty') {
        const wrongOptions = options.filter(opt => opt !== currentCountry.name);
        const shuffledWrong = wrongOptions.sort(() => Math.random() - 0.5);
        const optionsToRemove = shuffledWrong.slice(0, 2);
        
        setOptions(options.filter(opt => !optionsToRemove.includes(opt)));
        setShowHintModal(false);
      }
    }
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
        <div className="hints">💡 {state.hints}</div>
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

        {showCapitalHint ? (
          <div className="capital-hint">
            <p>Başkent: <span>{currentCountry.capital}</span></p>
          </div>
        ) : (
          state.hints > 0 && (
            <button onClick={handleHintClick} className="hint-button">
              İpucu Kullan
            </button>
          )
        )}

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

        {showHintModal && (
          <div className="hint-modal">
            <div className="hint-modal-content">
              <h3>İpucu Seç</h3>
              <button 
                onClick={() => handleHintSelect('capital')}
                disabled={usedHints.includes('capital')}
                className="hint-option"
              >
                Başkent İpucu
              </button>
              <button 
                onClick={() => handleHintSelect('fifty')}
                disabled={usedHints.includes('fifty')}
                className="hint-option"
              >
                50:50
              </button>
              <button onClick={handleHintClose} className="hint-close">
                Kapat
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game; 