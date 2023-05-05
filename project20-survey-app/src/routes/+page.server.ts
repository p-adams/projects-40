import { data } from "$lib/surveyData";

export function load({ params }) {
  return { surveyData: data };
}
