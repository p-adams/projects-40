import { describe, it, expect } from "vitest";
import { quizScore, quiz } from "./index";

describe("quiz score test", () => {
  it("score is 100", () => {
    const quizQuestions: App.Question[] = [
      {
        id: 0,
        title: "Which of the following is not a position value",
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
    expect(quizScore(quizQuestions).formattedPercentage).toBe("100%");
  });
});

describe("new quiz", () => {
  it("33% score with default data", () => {
    expect(quizScore(quiz.questions).formattedPercentage).toBe("33%");
  });
  it("100% score when all correct answers are selected", () => {
    quiz.questions[0].selected = "D";
    quiz.questions[1].selected = "C";
    expect(quizScore(quiz.questions).formattedPercentage).toBe("100%");
  });
});
