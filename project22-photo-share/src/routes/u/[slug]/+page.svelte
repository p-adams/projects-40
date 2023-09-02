<script lang="ts">
  import { enhance } from "$app/forms";
  import { page } from "$app/stores";
  import PhotoCard from "$lib/PhotoCard.svelte";
  export let data;
  $: isLoggedInUser = data.root.user.username === $page.params.slug;
</script>

<section>
  {#if isLoggedInUser}
    <!-- show story creator widget -->
    <form method="POST" use:enhance enctype="multipart/form-data">
      <input name="title" />
      <div class="image-upload-widget">
        <img src={""} alt="story-upload" />
        <input
          class="hidden"
          id="file-to-upload"
          type="file"
          accept="image/*"
          name="img"
        />
      </div>
      <input name="description" />
      <button>Create</button>
    </form>
  {/if}

  <h1>homepage {data.user.username}</h1>
  <div class="photo-grid">
    {#each data.stories as story}
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
