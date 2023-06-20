<script lang="ts">
  import { afterUpdate } from "svelte";

  export let data;
  afterUpdate(() => {
    console.log(data);
  });
  console.log(import.meta.env.VITE_ENDPOINT);
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Home" />
</svelte:head>

<section>
  <h1>E Book</h1>
  <div class="Main-book-list">
    <ul>
      {#each data.bookData.results as result}
        <li class="Book-list-item">{result.id} - {result.title}</li>
      {/each}
    </ul>
  </div>
</section>

<style>
</style>
