<script lang="ts">
  import { enhance } from "$app/forms";
  import { page } from "$app/stores";
  import PhotoCard from "$lib/PhotoCard.svelte";
  export let data;
  export let form;
  $: isLoggedInUser = data.root.user.username === $page.params.slug;
</script>

<div>
  <div class="story-creator-wrapper">
    {#if isLoggedInUser}
      <!-- show story creator widget -->
      <form
        method="POST"
        use:enhance
        enctype="multipart/form-data"
        action="?/create"
      >
        <label for="title">
          Title
          <input name="title" required />
        </label>

        <div class="image-upload-widget">
          <input
            class="hidden"
            id="file-to-upload"
            type="file"
            accept="image/*"
            name="img"
            required
          />
        </div>
        <label>
          Description
          <input name="description" />
        </label>

        <button>Create</button>
      </form>
    {/if}
  </div>

  <div class="photo-grid">
    {#each data.stories as story}
      <PhotoCard {story} />
    {/each}
  </div>
</div>

<style>
  .story-creator-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
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
