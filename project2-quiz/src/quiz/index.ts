const quizQuestions: App.Question[] = [
  {
    id: 0,
    title: "Which of the following is not a position value",
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
  {
    id: 1,
    title: "Which of the following is not a valid function declaration",
    answer: "C",
    hint: null,
    selected: "A",
    choices: [
      { label: "function myFunction(){};", value: "A" },
      { label: "const myFunction = () => {};", value: "B" },
      { label: "const function = myFunction(){};", value: "C" },
      { label: "const myFunction = function(){};", value: "D" },
    ],
  },
];

export const quiz: App.Quiz = {
  name: "Web Development Quiz Demo",
  questions: quizQuestions,
  keywords: ["Web Development", "CSS", "JavaScript", "HTML"],
};

export function quizScore(questions: App.Question[]): {
  score: number;
  percentage: number;
  formattedPercentage: string;
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
    formattedPercentage: `${score * 100}%`,
  };
}
