<script lang="ts">
  import { nanoid } from "nanoid";
  let url: string = "";
  let result: string = "";
  let urlMap = new Map<string, string>();
  function shorten() {
    if (!url) {
      return;
    }
    if (!urlMap.has(url)) {
      urlMap.set(url, `fun.sz/${nanoid().substring(0, 7).toLocaleLowerCase()}`);
    }
    result = urlMap.get(url);
  }
</script>

<main>
  <div />
  <h1>Link Shortener</h1>

  <div class="card">
    <div class="Actions">
      <label for="link-input">
        Enter Link
        <input id="link-input" bind:value={url} />
      </label>
      <button on:click={() => shorten()}>Shorten</button>
    </div>
    <div class="Result">
      {#if result}
        <div class="Text">{result}</div>
        <button
          on:click={() => {
            navigator.clipboard.writeText(result);
          }}>Copy</button
        >
      {/if}
    </div>
  </div>
</main>

<style>
  .Result {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .Text {
    font-weight: bold;
  }
</style>
