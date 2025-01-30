import React, { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { useNavigate } from 'react-router-dom';
import { allCountries } from '../data/allCountries';
import { Country } from '../types';

const Game: React.FC = () => {
  const { state, dispatch } = useGame();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(10);
  const [currentCountry, setCurrentCountry] = useState<Country>(allCountries[0]);
  const [options, setOptions] = useState<string[]>([]);
  const [showHintModal, setShowHintModal] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [usedCountries, setUsedCountries] = useState<string[]>([]);
  const [showCapitalHint, setShowCapitalHint] = useState(false);
  const [usedHints, setUsedHints] = useState<string[]>([]);

  useEffect(() => {
    // Debug logları
    console.log('Difficulty:', state.difficulty);

    // Easy mod için özel filtreleme
    const easyCountries = [
      'tr', 'no', 'mx', 'ca', 'jp', 'it', 'ch', 'se', 
      'es', 'ie', 'gb-eng', 'nl', 'in', 'kr', 'fr', 
      'fi', 'id', 'dk', 'cn', 'br', 'gb', 'be', 'at', 
      'au', 'us', 'de'
    ];

    // Filtreleme mantığını düzelt
    const filteredByDifficulty = allCountries.filter(c => {
      if (state.difficulty === 'Kolay') {
        return easyCountries.includes(c.code.toLowerCase());
      } else {
        return c.difficulty === state.difficulty;
      }
    });

    console.log('Filtered by difficulty:', filteredByDifficulty.length);
    console.log('Used countries:', usedCountries);

    const availableCountries = filteredByDifficulty.filter(c => !usedCountries.includes(c.id));
    console.log('Available countries:', availableCountries.length);

    if (availableCountries.length === 0 || state.currentQuestion > 10) {
      console.log('Game Over - No more countries or max questions reached');
      dispatch({ type: 'GAME_OVER' });
      return;
    }

    const randomCountry = availableCountries[Math.floor(Math.random() * availableCountries.length)];
    console.log('Selected country:', randomCountry);
    
    setCurrentCountry(randomCountry);
    setUsedCountries(prev => [...prev, randomCountry.id]);

    // Yanlış seçenekleri oluştur
    const wrongOptions = filteredByDifficulty
      .filter(c => c.id !== randomCountry.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(c => c.name);
    
    const allOptions = [...wrongOptions, randomCountry.name]
      .sort(() => Math.random() - 0.5);
    
    setOptions(allOptions);
    setTimeLeft(10);
    setShowCapitalHint(false);
    setIsPaused(false);
  }, [state.currentQuestion, state.difficulty, dispatch, usedCountries]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!state.isGameOver && !isPaused) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 0) {
            clearInterval(interval);
            dispatch({ type: 'DECREASE_LIVES' });
            if (state.lives > 1) {
              dispatch({ type: 'NEXT_QUESTION' });
              return 10;
            } else {
              dispatch({ type: 'GAME_OVER' });
              return 0;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [state.isGameOver, isPaused, state.lives, state.currentQuestion, dispatch]);

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
    setShowHintModal(true);
    setIsPaused(true);
  };

  const handleHintClose = () => {
    setShowHintModal(false);
    setIsPaused(false);
  };

  const handleHintSelect = (hintType: string) => {
    if (!usedHints.includes(hintType) && state.hints > 0) {
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
        <div className="question-count">📝 {state.currentQuestion}/10</div>
        <div className="timer">⏱️ {timeLeft}</div>
        <div className="score">🏆 {state.score}</div>
      </div>

      <div className="game-content">
        {currentCountry && (
          <div className="flag-container">
            <img 
              src={`/bayrak-bilmece/flags/${currentCountry.code.toLowerCase()}.png`} 
              alt="Ülke Bayrağı"
              className="flag-image"
              onLoad={() => console.log('Bayrak yüklendi:', currentCountry.code)}
              onError={(e) => {
                console.error(`Bayrak yüklenemedi: ${currentCountry.code}`);
                console.log('Tam URL:', `/bayrak-bilmece/flags/${currentCountry.code.toLowerCase()}.png`);
              }}
              style={{ opacity: 1, transition: 'opacity 0.3s ease-in-out' }}
            />
          </div>
        )}

        {showCapitalHint ? (
          <div className="capital-hint-inline">
            <p>Başkent: <span className="capital-name">{currentCountry.capital}</span></p>
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
              >
                Başkent İpucu
              </button>
              <button 
                onClick={() => handleHintSelect('fifty')}
                disabled={usedHints.includes('fifty')}
              >
                50:50
              </button>
              <button onClick={handleHintClose}>Kapat</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game; 