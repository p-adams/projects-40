<script lang="ts">
  import store from "$lib/store";
  import { onMount } from "svelte";
  onMount(() => {
    store.subscribe((message) => console.log(message));
  });
</script>

<h1>Welcome to SvelteKit</h1>
<button on:click={() => store.sendMessage("test")}>test</button>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
