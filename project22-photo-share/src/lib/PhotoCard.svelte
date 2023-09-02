<script lang="ts">
  export let story: App.StoryData;
</script>

<div class="photo-card">
  <h2>{story.title}</h2>
  <div class="card-content">
    <img src={story.img} alt="Card" />
    <div class="card-actions">
      <textarea />
      <button>Add</button>
    </div>
  </div>
</div>

<style>
  .photo-card {
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    outline: 1px solid gray;
  }
  img {
    width: 50px;
    height: 50px;
  }
</style>
