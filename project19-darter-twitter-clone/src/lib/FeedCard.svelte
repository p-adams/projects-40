<script lang="ts">
  export let feedItem: Lib.Dart;
</script>

<div class="feed-card">
  <div>
    <img
      src="https://via.placeholder.com/75"
      alt={`user-${feedItem.username}`}
    />
  </div>
  <div class="content">
    <div class="top-content">
      <a href={`/profile/${feedItem.username}`}>{feedItem.username}</a>
      <div>{feedItem.date.toLocaleString()}</div>
    </div>
    <div class="main-content">{feedItem.text}</div>
  </div>
</div>

<style>
  .feed-card {
    display: flex;
    gap: 10px;
  }
  .feed-card:not(:last-child) {
    border-bottom: 1px solid var(--lightGray);
  }
  .content {
    width: 100%;
    margin: 2px 12px 0px 0px;
  }
  .top-content {
    display: flex;
    justify-content: space-between;
  }
  .main-content {
    margin-top: 4px;
  }
</style>
