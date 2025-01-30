export interface Country {
  id: string;
  name: string;
  code: string;
  capital: string;
  difficulty: 'easy' | 'medium' | 'hard';
  location: {
    lat: number;
    lng: number;
  };
}

export interface GameState {
  lives: number;
  hints: number;
  score: number;
  currentQuestion: number;
  difficulty: 'easy' | 'medium' | 'hard';
  section: number;
  isGameOver: boolean;
}

export interface User {
  id: string;
  username: string;
  highScore: number;
  gamesPlayed: number;
} 