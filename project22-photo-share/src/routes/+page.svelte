<script lang="ts">
  import PhotoCard from "$lib/PhotoCard.svelte";
  export let data;
</script>

Hello: {data.entryData.user.username}!
<!-- landing page -->
<h1>Photo Share App</h1>
<h2>Allowing users to create engaging visual stories</h2>
<div>Already a member? <a href="/u/authenticate">Login</a></div>
<div>Not a member? <a href="/u/register">Sign up</a></div>
<!-- move to photo stories page -->
<div class="photo-grid">
  {#each data?.entryData.stories as story}
    <PhotoCard {story} />
  {/each}
</div>

<style>
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  @media (max-width: 767px) {
    .photo-grid {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .photo-grid {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
