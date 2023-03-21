<script lang="ts">
  import store from "$lib/store";
  import { onMount } from "svelte";
  import type { Message } from "../datatypes";
  let messages: Message[] = [];
  let message = "";
  let currentUser = "";

  onMount(() => {
    store.subscribe((storeMessages) => (messages = storeMessages));
  });
  $: loggedIn = false;
  $: users = Array.from(new Set(messages?.map((message) => message.username)));
  function login() {
    if (!!currentUser) {
      loggedIn = true;
    }
    return;
  }
  function logout() {
    loggedIn = false;
    currentUser = "";
  }
  function sendMessage() {
    store.sendMessage({
      username: currentUser,
      text: message,
      sent: new Date(),
    });
    message = "";
  }
</script>

<h1>Chat</h1>
{#if !loggedIn}
  <div>
    <label>
      Username
      <input bind:value={currentUser} />
    </label>
    <button on:click={() => login()}>Enter</button>
  </div>
{:else}
  <button on:click={() => logout()}>logout</button>
  <div class="Chat-app">
    <div class="Message-window">
      {#each messages as message}
        <div>
          <span class="Username">{message.username}</span>{message.text}
        </div>
      {/each}
    </div>
    <div class="User-list">
      {#each users as user}
        <div>{user}</div>
      {/each}
    </div>
    <div class="Message-input">
      <input bind:value={message} />
      <button on:click={() => sendMessage()}>Send</button>
    </div>
  </div>
{/if}

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
