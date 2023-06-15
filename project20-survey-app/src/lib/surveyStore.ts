import { writable } from "svelte/store";
import { MOCK_SURVEY_RESPONSES, data } from "./surveyData";
import { calculateSurveyResults } from "./calculateSurveyResults";

const surveyStore = writable<{ [key: string]: any }>({});

function updateSurvey(key: string, value: string) {
  surveyStore.update((currentSelectedValues) => {
    const updatedSelectedValues = { ...currentSelectedValues };
    updatedSelectedValues[key] = value;
    return updatedSelectedValues;
  });
}

function submitSurvey(userID: string | undefined) {
  surveyStore.subscribe((store) => {
    console.log(calculateSurveyResults(MOCK_SURVEY_RESPONSES, data));
    console.log(store, userID);
    const submission = {
      userID,
      ...store,
    };
    // TODO: commit to DB
  });
}

export default {
  subscribe: surveyStore.subscribe,
  updateSurvey,
  submitSurvey,
};
