<script lang="ts">
  import store from "$lib/store";
  import { onMount } from "svelte";
  import type { Message } from "../datatypes";
  let messages: Message[] = [];
  let message = "";
  let c = 0;
  onMount(() => {
    store.subscribe((storeMessages) => (messages = storeMessages));
  });
  $: users = messages?.map((message) => message.username);
</script>

<h1>Chat</h1>
<button
  on:click={() => {
    ++c;
    store.sendMessage(c);
  }}>test</button
>
<div class="Chat-app">
  <div class="Message-window">
    {#each messages as message}
      <div><span class="Username">{message.username}</span>{message.text}</div>
    {/each}
  </div>
  <div class="User-list">
    {#each users as user}
      <div>{user}</div>
    {/each}
  </div>
  <div class="Message-input">
    <input bind:value={message} />
    <button>Send</button>
  </div>
</div>

<style>
  .Chat-app {
    display: grid;
    grid-template-areas:
      "window window list"
      "window window list"
      "input input input";
    height: 400px;
    outline: 1px solid lightgray;
  }
  .Message-window {
    grid-area: window;
  }
  .User-list {
    grid-area: list;
  }
  .Message-input {
    grid-area: input;
  }
  .Username {
    color: blue;
    font-weight: bold;
    font-size: large;
  }
  .Username::after {
    content: ":\00a0";
  }
</style>
