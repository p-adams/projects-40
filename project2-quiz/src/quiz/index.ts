export const quizQuestions: App.Question[] = [
  {
    id: 0,
    question: "Which of the following is not a position value",
    answer: "D",
    hint: null,
    selected: "A",
    choices: [
      { label: "fixed", value: "A" },
      { label: "relative", value: "B" },
      { label: "sticky", value: "C" },
      { label: "block", value: "D" },
    ],
  },
];

export function quizScore(questions: App.Question[]): {
  score: number;
  percentage: number;
} {
  const score =
    questions.reduce(
      (score, question) =>
        question.selected === question.answer ? ++score : score,
      0
    ) / questions.length;
  100;
  return {
    score,
    percentage: score * 100,
  };
}
