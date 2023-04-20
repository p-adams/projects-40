<script lang="ts">
  import dartStore from "$lib/stores/dartStore";
  import FeedCard from "$lib/FeedCard.svelte";
  let dartFeed: Lib.Dart[] = [];
  dartStore.subscribe((darts) => (dartFeed = darts));
</script>

<section class="main feed">
  <h1 class="feed-title">Darts</h1>
  <div>
    {#each dartFeed as feedItem}
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
