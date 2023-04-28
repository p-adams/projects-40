import { writable } from "svelte/store";

const store = writable({ open: false });

function openDialog() {
  store.update((o) => ({ open: true }));
}
function closeDialog() {
  store.update((o) => ({ open: false }));
}
export default {
  subscribe: store.subscribe,
  openDialog,
  closeDialog,
};
