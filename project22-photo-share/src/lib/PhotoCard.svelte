<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let story: App.StoryData;
  const dispatch = createEventDispatcher();
</script>

<div class="photo-card">
  <div class="photo-header">
    <h2>{story.title}</h2>
    <form method="POST" action="?/delete">
      <input hidden bind:value={story.id} name="storyId" />
      <button>Delete</button>
    </form>
  </div>

  <div class="card-content">
    <img src={story.img} alt="Card" />
    <div class="card-actions">
      <textarea bind:value={story.description} />
      <!-- TODO: enable once edit is supported <button>Add</button> -->
    </div>
  </div>
</div>

<style>
  .photo-card {
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    outline: 1px solid gray;
  }
  .photo-card h2 {
    font-size: 16px;
  }
  .photo-header {
    display: flex;
    justify-content: space-between;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 200px;
  }
</style>
