namespace Lib {
  type Question = { label: string; value: string };
  type Questions = Array<Questions>;
  // response can be array of questions when multiple responses are available
  type SurveyResponse = Question | Questions;
  interface SurveyQuestions {
    id: string;
    name: string;
    questions: Questions;
    response: SurveyResponse;
  }
  interface SurveyCategory {
    id: string;
    name: string;
    description?: string;
    assets?: Array<string>;
    surveyQuestions?: Array<SurveyQuestions>;
  }
}
