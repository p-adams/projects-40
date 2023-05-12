namespace Lib {
  type QuestionId = string;
  type Option = { label: string; value: string };
  type Options = Array<Option>;
  // response can be array of Options when multiple responses are available
  type SurveyQuestionResponse = Option | Options;

  interface SurveyResponse {
    questionId: QuestionId;
    questionResponse: SurveyQuestionResponse;
  }
  interface SurveyQuestionGroup {
    id: QuestionId;
    name: string;
    description: string;
    allowMultiple?: boolean;
    options: Options;
  }
  interface SurveyCategory {
    id: string;
    name: string;
    description?: string;
    assets?: Array<string>;
    surveyQuestionGroups: Array<SurveyQuestionGroup>;
  }
}
