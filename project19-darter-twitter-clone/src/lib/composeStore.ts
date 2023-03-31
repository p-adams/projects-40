import { writable } from "svelte/store";

const content = writable("");

function setContent(text: string) {
  console.log("confirm ", text);
  content.update((content) => content.concat(text));
}

export default {
  setContent,
};
