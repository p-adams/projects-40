import { describe, it, expect } from "vitest";
import { quizScore } from "./index";

describe("quiz score test", () => {
  it("score is 100", () => {
    const quizQuestions: App.Question[] = [
      {
        id: 0,
        question: "Which of the following is not a position value",
        answer: "D",
        hint: null,
        selected: "D",
        choices: [
          { label: "fixed", value: "A" },
          { label: "relative", value: "B" },
          { label: "sticky", value: "C" },
          { label: "block", value: "D" },
        ],
      },
    ];
    expect(quizScore(quizQuestions).score).toBe(1);
    expect(quizScore(quizQuestions).percentage).toBe(100);
  });
});
