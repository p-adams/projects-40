import { writable } from "svelte/store";

const open = writable(false);
const content = writable("");

function openDialog() {
  open.update((o: boolean) => true);
}
function closeDialog() {
  open.update((o: boolean) => false);
}

function setContent(text: string) {
  content.update((content) => content.concat(text));
}

export default {
  openSubscribe: open.subscribe,
  openDialog,
  closeDialog,
  setContent,
};
