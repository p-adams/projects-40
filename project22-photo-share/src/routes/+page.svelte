<script lang="ts">
  import PhotoCard from "$lib/PhotoCard.svelte";
  export let data;
</script>

<h1>Photo Share App</h1>
<h2>Allowing users to create engaging visual stories</h2>
<div class="photo-grid">
  {#each data.stories as story}
    <PhotoCard />
  {/each}
</div>

<style>
  .photo-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }
</style>
