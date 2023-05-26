import { writable } from "svelte/store";

const surveyStore = writable<{ [key: string]: any }>({});

function updateSurvey(key: string, value: string) {
  surveyStore.update((currentSelectedValues) => {
    const updatedSelectedValues = { ...currentSelectedValues };
    updatedSelectedValues[key] = value;
    return updatedSelectedValues;
  });
}

function submitSurvey(userID: string | undefined) {
  // TODO: commit to DB
  surveyStore.subscribe((store) => {
    console.log(store, userID);
  });
}

export default {
  subscribe: surveyStore.subscribe,
  updateSurvey,
  submitSurvey,
};
