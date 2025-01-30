import React, { createContext, useContext, useReducer } from 'react';
import { GameState, Difficulty } from '../types';

const initialState: GameState = {
  lives: 3,
  hints: 2,
  score: 0,
  currentQuestion: 1,
  difficulty: 'Orta' as Difficulty,
  section: 1,
  isGameOver: false,
};

type GameAction =
  | { type: 'SET_DIFFICULTY'; payload: Difficulty }
  | { type: 'DECREASE_LIVES' }
  | { type: 'USE_HINT' }
  | { type: 'INCREASE_SCORE'; payload: number }
  | { type: 'NEXT_QUESTION' }
  | { type: 'GAME_OVER' }
  | { type: 'RESET_GAME' };

const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'SET_DIFFICULTY':
      return { ...initialState, difficulty: action.payload };
    
    case 'DECREASE_LIVES':
      return {
        ...state,
        lives: state.lives - 1,
        isGameOver: state.lives <= 1
      };
    
    case 'USE_HINT':
      return {
        ...state,
        hints: state.hints - 1
      };
    
    case 'INCREASE_SCORE':
      return { ...state, score: state.score + action.payload };
    
    case 'NEXT_QUESTION':
      if (state.currentQuestion >= 10) {
        return { ...state, isGameOver: true };
      }
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1
      };
    
    case 'GAME_OVER':
      return { ...state, isGameOver: true };
    
    case 'RESET_GAME':
      return { ...initialState, difficulty: state.difficulty };
    
    default:
      return state;
  }
};

const GameContext = createContext<{
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
} | null>(null);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}; 