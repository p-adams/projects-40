import { MOCK_SURVEY_RESPONSES, data } from "$lib/surveyData";
import { calculateSurveyResults } from "$lib/calculateSurveyResults";
// TODO: provide calculateSurveyResults with fetch survey results from DB
export function load() {
  return {
    surveyData: data,
    responses: calculateSurveyResults(MOCK_SURVEY_RESPONSES, data),
  };
}
