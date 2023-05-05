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
  interface SurveyQuestionGroup {
    id: QuestionId;
    name: string;
    description: string;
    questions: Questions;
  }
  interface SurveyCategory {
    id: string;
    name: string;
    description?: string;
    assets?: Array<string>;
    surveyQuestionGroups?: Array<SurveyQuestionGroup>;
  }
}
