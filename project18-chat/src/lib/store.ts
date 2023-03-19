import { writable } from "svelte/store";
import { browser } from "$app/environment";
import { toString } from "../helpers/parse";
const messageStore = writable("");
let socket: WebSocket | null = null;
if (browser) {
  socket = new WebSocket("ws://localhost:3000");
}

socket?.addEventListener("open", (event) => {
  console.log("It's open");
});

socket?.addEventListener("message", (event) => {
  messageStore.set(event.data);
});

const sendMessage = (message: any) => {
  if (socket && socket?.readyState <= 1) {
    socket.send(toString(message));
  }
};

export default {
  subscribe: messageStore.subscribe,
  sendMessage,
};
