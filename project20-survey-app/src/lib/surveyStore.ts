import { goto } from "$app/navigation";
import { redirect } from "@sveltejs/kit";
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
  surveyStore.subscribe((store) => {
    const submission = {
      userID,
      ...store,
    };
    // TODO: commit to DB
    goto("/thankyou");
  });
}

export default {
  subscribe: surveyStore.subscribe,
  updateSurvey,
  submitSurvey,
};
