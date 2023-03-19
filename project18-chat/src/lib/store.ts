import { writable } from "svelte/store";
import { browser } from "$app/environment";
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

const sendMessage = (message: string) => {
  console.log(message);
  if (socket && socket?.readyState <= 1) {
    socket.send(message);
  }
};

export default {
  subscribe: messageStore.subscribe,
  sendMessage,
};
