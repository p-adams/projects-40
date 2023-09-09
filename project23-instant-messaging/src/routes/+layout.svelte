<script lang="ts">
  import { afterUpdate } from "svelte";

  export let data;
  let tokenVal = "";
  afterUpdate(() => {
    if (data.userToken) {
      tokenVal = data.userToken;
    }
  });
</script>

<header>
  <nav>
    <ul>
      <li>ProfileTalk</li>
    </ul>
    <div class="token-display">
      <input bind:value={tokenVal} readonly disabled />
      <button on:click={() => navigator.clipboard.writeText(tokenVal)}
        >copy</button
      >
      <a href="/token/?generate">Generate New Token</a>
    </div>
  </nav>
</header>
<main>
  <slot />
</main>

<style>
  @import "../app.css";
  main {
    height: calc(100vh - 60px);
  }
  nav {
    display: flex;
    justify-content: space-between;
  }
  nav .token-display {
    display: flex;
  }
  .token-display {
    width: fit-content;
    background-color: lightgray;
    padding: 8px;
  }
  .token-display input {
    font-weight: bolder;
  }
</style>
