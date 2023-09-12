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
      {#if !!tokenVal}<div>
          <input bind:value={tokenVal} readonly disabled />
          <button on:click={() => navigator.clipboard.writeText(tokenVal)}
            ><i class="fas fa-clipboard" /></button
          >
        </div>
      {/if}

      <a href="/token/?generate"> Generate Next Token</a>
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
    margin-bottom: 16px;
  }
  nav .token-display {
    display: flex;
    flex-direction: column;
    min-width: 250px;
  }
  .token-display {
    width: fit-content;
    background-color: lightgray;
    padding: 8px;
  }
  .token-display input {
    font-weight: bolder;
  }
  .token-display a {
    margin-top: auto;
  }
</style>
