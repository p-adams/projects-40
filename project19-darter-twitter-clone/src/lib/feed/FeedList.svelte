<script lang="ts">
  import feedStore from "$lib/feed/feedStore";
  import FeedCard from "$lib/feed/FeedCard.svelte";
  let feeds: Lib.Feeds = {};
  feedStore.subscribe((f) => (feeds = f));
</script>

<section class="main feed">
  <h1 class="feed-title">Darts</h1>
  <div>
    {#each feeds?.me as feedItem}
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
