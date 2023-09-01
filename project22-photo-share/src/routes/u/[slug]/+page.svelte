<script lang="ts">
  import PhotoCard from "$lib/PhotoCard.svelte";
  export let data;
</script>

<section>
  <h1>homepage</h1>
  <div class="photo-grid">
    {#each data?.entryData.stories as story}
      <PhotoCard {story} />
    {/each}
  </div>
</section>

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
