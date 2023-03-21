import { writable } from "svelte/store";
import { browser } from "$app/environment";
import { toObj, toString } from "../helpers/parse";
import type { Message } from "../datatypes";

const messageStore = writable<Array<Message>>([]);

let socket: WebSocket | null = null;

if (browser) {
  socket = new WebSocket("ws://localhost:3000");
}

socket?.addEventListener("open", (event) => {
  console.log("socket open");
});

socket?.addEventListener("message", (event) => {
  messageStore.set(toObj(event.data));
});

const sendMessage = (message: Message) => {
  if (socket && socket?.readyState <= 1) {
    socket.send(toString(message));
  }
};

export default {
  subscribe: messageStore.subscribe,
  sendMessage,
};
