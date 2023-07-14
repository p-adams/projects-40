<script lang="ts">
  import IdentityElement from "$lib/IdentityElement.svelte";
  import PhotoCard from "$lib/PhotoCard.svelte";
  export let data;
  const identity: { [key: string]: string } = {
    username: "",
    password: "",
  };
  function handleIdentityInput(input: { field: string; value: string }) {
    const { field, value } = input;
    identity[field] = value;
  }
</script>

<h1>Photo Share App</h1>
<h2>Allowing users to create engaging visual stories</h2>
<IdentityElement on:input={(e) => handleIdentityInput(e.detail.inputData)} />
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
