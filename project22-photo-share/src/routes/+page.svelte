<script lang="ts">
  import IdentityForm from "$lib/IdentityForm.svelte";
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
  function handleSubmit(data: { username: string; password: string }) {
    console.log(data);
  }
</script>

<h1>Photo Share App</h1>
<h2>Allowing users to create engaging visual stories</h2>
<IdentityForm
  on:input={(e) => handleIdentityInput(e.detail.data)}
  on:identitySubmit={(e) => handleSubmit(e.detail.data)}
/>
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
