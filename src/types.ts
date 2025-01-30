export type Difficulty = 'Kolay' | 'Orta' | 'Zor';

export interface Country {
  id: string;
  name: string;
  code: string;
  capital: string;
  difficulty: Difficulty;
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
  difficulty: Difficulty;
  section: number;
  isGameOver: boolean;
} 