import { MOCK_SURVEY_RESPONSES, data } from "$lib/surveyData";
import { calculateSurveyResults } from "$lib/calculateSurveyResults";
export function load() {
  return {
    surveyData: data,
    responses: calculateSurveyResults(MOCK_SURVEY_RESPONSES, data),
  };
}
