namespace Lib {
  type QuestionId = string;
  type Option = { label: string; value: string };
  type Options = Array<Option>;

  // response will be array of one or more Options (more when multiple responses are available)

  interface SurveyResult {
    totalResponses: number;
    [key: string]: any;
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

  type SurveyCategories = Array<SurveyCategory>;
}
