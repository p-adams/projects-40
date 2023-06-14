import { writable } from "svelte/store";
import { MOCK_SURVEY_RESPONSES } from "./surveyData";

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
    console.log(store, userID);
    const submission = {
      userID,
      ...store,
    };
    // TODO: commit to DB
  });
}
// TODO: implement function to calculate survey results
function surveyResults(
  _surveyResponses: Array<{ [key: string]: string | Array<string> }>
) {
  const data = MOCK_SURVEY_RESPONSES.map((response) => {});
}

export default {
  subscribe: surveyStore.subscribe,
  updateSurvey,
  submitSurvey,
};
