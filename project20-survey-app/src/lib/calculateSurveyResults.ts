export function calculateSurveyResults(
  responses: any[],
  surveyCategories: Lib.SurveyCategories
): Lib.SurveyResult {
  const surveyResult: Lib.SurveyResult = {
    totalResponses: responses.length,
  };

  for (const category of surveyCategories) {
    for (const questionGroup of category.surveyQuestionGroups) {
      const key = questionGroup.name.replace(/\s+/g, "");
      surveyResult[key] = {};

      for (const option of questionGroup.options) {
        surveyResult[key][option.value] = 0;
      }
    }
  }

  for (const response of responses) {
    for (const category of surveyCategories) {
      for (const questionGroup of category.surveyQuestionGroups) {
        const key = questionGroup.name.replace(/\s+/g, "");

        if (response[key]) {
          if (Array.isArray(response[key])) {
            for (const value of response[key]) {
              surveyResult[key][value]++;
            }
          } else {
            surveyResult[key][response[key]]++;
          }
        }
      }
    }
  }

  return surveyResult;
}
