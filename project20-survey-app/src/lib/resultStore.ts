import { writable } from "svelte/store";
import { MOCK_SURVEY_RESPONSES, data } from "./surveyData";
import { calculateSurveyResults } from "./calculateSurveyResults";

const store = writable();

function loadResponses() {
  // fetch survey response from DB
  const responses: Array<any> = [];
  store.update(() => calculateSurveyResults(responses, data));
}

export default {
  subscribe: store.subscribe,
  loadResponses,
};
