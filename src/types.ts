export interface Quiz {
  image: string;
  answer: string;
}

export interface Option {
  timeLimit: number;
  isRandom: boolean;
}

export type Step = "SETTING" | "LOADING" | "GAME"
