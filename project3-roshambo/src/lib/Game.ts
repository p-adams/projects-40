import type { Shape } from "./datatypes";
import { Choice } from "./datatypes";
export const shapes: { [key: string]: Shape } = {
  rock: {
    name: Choice.Rock,
    abbr: "R",
  },
  paper: {
    name: Choice.Paper,
    abbr: "P",
  },
  scissors: {
    name: Choice.Scissors,
    abbr: "S",
  },
};

export function beats(
  player: Shape,
  other: Shape
): boolean | "tie" | "not found" {
  const shape = shapes[player?.name];
  if (shape.name === other.name) {
    return "tie";
  }
  switch (shape?.name) {
    case "rock":
      return other.name === "scissors";
    case "paper":
      return other.name === "rock";
    case "scissors":
      return other.name === "paper";
    default:
      return "not found";
  }
}
