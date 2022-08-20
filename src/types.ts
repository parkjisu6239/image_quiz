export type Quiz = {
  image: string;
  answer: string;
}

export type Option = {
  timeLimit: number;
  isRandom: boolean;
}

export type Step = "SETTING" | "LOADING" | "GAME"
