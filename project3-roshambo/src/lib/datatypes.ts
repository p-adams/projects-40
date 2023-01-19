export enum Choice {
  Rock = "rock",
  Paper = "paper",
  Scissors = "scissors",
}
export interface Shape {
  name: Choice;
  abbr: string;
}
