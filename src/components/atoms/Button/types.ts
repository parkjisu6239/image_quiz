import type { themeColor } from "./constants";

export type colorOption = {
  default: string;
  hover: string;
}

export type ButtonThemeColor = keyof typeof themeColor
