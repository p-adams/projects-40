import { writable } from "svelte/store";

const open = writable(false);

function openDialog() {
  open.update((o: boolean) => true);
}
function closeDialog() {
  open.update((o: boolean) => false);
}

export default {
  openSubscribe: open.subscribe,
  openDialog,
  closeDialog,
};
