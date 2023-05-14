import { writable } from "svelte/store";

const surveyStore = writable<{ [key: string]: any }>({});

// use for single selection

function updateSurvey(key: string, value: string) {
  surveyStore.update((currentSelectedValues) => {
    const updatedSelectedValues = { ...currentSelectedValues };
    updatedSelectedValues[key] = value; // Update the selected value for the specific key
    return updatedSelectedValues;
  });
}

export default {
  subscribe: surveyStore.subscribe,
  updateSurvey,
};
