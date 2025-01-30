import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import Game from './components/Game';
import AdminPanel from './components/AdminPanel';
import { GameProvider } from './context/GameContext';
import { initializeDatabase } from './services/firebase';

const App: React.FC = () => {
  useEffect(() => {
    // Uygulama başladığında veritabanını başlat
    initializeDatabase().catch(console.error);
  }, []);

  return (
    <GameProvider>
      <HashRouter>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/game" element={<Game />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </div>
      </HashRouter>
    </GameProvider>
  );
};

export default App; 