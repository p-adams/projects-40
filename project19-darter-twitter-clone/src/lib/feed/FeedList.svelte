<script lang="ts">
  import FeedCard from "$lib/feed/FeedCard.svelte";
  export let feed: Lib.Dart[];
</script>

<section class="main feed">
  <h1 class="feed-title">Darts</h1>
  <div>
    {#each feed as feedItem}
      <FeedCard {feedItem} />
    {/each}
  </div>
</section>

<style>
  .feed {
    flex: 2;
  }
  .feed-title {
    color: var(--darkNavy);
    margin-bottom: 10px;
    border-bottom: 1px solid var(--lightGray);
  }
</style>
