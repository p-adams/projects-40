namespace Lib {
  type QuestionId = string;
  type Question = { label: string; value: string };
  type Questions = Array<Questions>;
  // response can be array of questions when multiple responses are available
  type SurveyQuestionResponse = Question | Questions;

  interface SurveyResponse {
    questionId: QuestionId;
    questionResponse: SurveyQuestionResponse;
  }
  interface SurveyQuestions {
    id: QuestionId;
    name: string;
    questions: Questions;
  }
  interface SurveyCategory {
    id: string;
    name: string;
    description?: string;
    assets?: Array<string>;
    surveyQuestions?: Array<SurveyQuestions>;
  }
}
