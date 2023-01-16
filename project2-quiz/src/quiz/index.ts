const quizQuestions: App.Question[] = [
  {
    id: 0,
    title: "Which of the following is not a position value?",
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
    title: "Which of the following is not a valid function declaration?",
    answer: "C",
    hint: null,
    selected: "A",
    choices: [
      { label: "function myFunction(){};", value: "A" },
      { label: "const myFunction = () => {};", value: "B" },
      { label: "function = () => {};", value: "C" },
      { label: "const myFunction = function(){};", value: "D" },
    ],
  },
  {
    id: 2,
    title: "What does the setInterval method return?",
    answer: "A",
    hint: null,
    selected: "A",
    choices: [
      { label: "interval ID", value: "A" },
      { label: "0", value: "B" },
      { label: "-1", value: "C" },
      { label: "setInterval is a void method", value: "D" },
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
  const rawScore =
    questions.reduce(
      (score, question) =>
        question.selected === question.answer ? ++score : score,
      0
    ) / questions.length;
  100;
  const score = Math.round((rawScore + Number.EPSILON) * 100) / 100;
  return {
    score,
    percentage: score * 100,
    formattedPercentage: `${score * 100}%`,
  };
}
