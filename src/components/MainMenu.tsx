import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';

const MainMenu: React.FC = () => {
  const navigate = useNavigate();
  const { dispatch } = useGame();
  const [selectedDifficulty, setSelectedDifficulty] = useState<'Kolay' | 'Orta' | 'Zor' | null>(null);

  const handleDifficultySelect = (difficulty: 'Kolay' | 'Orta' | 'Zor') => {
    setSelectedDifficulty(difficulty);
    dispatch({ type: 'SET_DIFFICULTY', payload: difficulty });
  };

  const startGame = () => {
    if (selectedDifficulty) {
      dispatch({ type: 'RESET_GAME' });
      dispatch({ type: 'SET_DIFFICULTY', payload: selectedDifficulty });
      navigate('/game');
    }
  };

  return (
    <div className="main-menu">
      <div className="profile-section">
        {/* Profil bileşeni buraya gelecek */}
      </div>
      
      <div className="difficulty-selection">
        <h2>Zorluk Seviyesi</h2>
        <div className="difficulty-buttons">
          <button 
            onClick={() => handleDifficultySelect('Kolay')}
            className={`difficulty-button ${selectedDifficulty === 'Kolay' ? 'selected' : ''}`}
          >
            Kolay
          </button>
          <button 
            onClick={() => handleDifficultySelect('Orta')}
            className={`difficulty-button ${selectedDifficulty === 'Orta' ? 'selected' : ''}`}
          >
            Orta
          </button>
          <button 
            onClick={() => handleDifficultySelect('Zor')}
            className={`difficulty-button ${selectedDifficulty === 'Zor' ? 'selected' : ''}`}
          >
            Zor
          </button>
        </div>
      </div>

      <div className="menu-buttons">
        <button 
          onClick={startGame} 
          className="start-button"
          disabled={!selectedDifficulty}
        >
          Oyuna Başla
        </button>
        <button onClick={() => navigate('/admin')} className="admin-button">
          Admin Paneli
        </button>
      </div>
    </div>
  );
};

export default MainMenu; 