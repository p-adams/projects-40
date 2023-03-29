<script lang="ts">
  import dartStore from "$lib/dartStore";
  let dartFeed: Lib.Dart[] = [];
  dartStore.subscribe((darts) => (dartFeed = darts));
</script>

<svelte:head>
  <title>Home</title>
  <meta name="Description" content="Home" />
</svelte:head>
<div class="home">
  <section class="side">
    <div>compose</div>
    <div>follow</div>
    <div>trending</div>
  </section>
  <section class="feed">
    <h1 class="feed-title">Darts</h1>
    <div>
      {#each dartFeed as feedItem}
        <div class="feed-card">{feedItem.text}</div>
      {/each}
    </div>
  </section>
</div>

<style>
  .home {
    display: flex;
    gap: 10px;
  }

  .feed-title {
    color: var(--darkNavy);
    margin-bottom: 10px;
    border-bottom: 1px solid var(--lightGray);
  }

  section {
    background-color: var(--pureWhite);
  }

  .side {
    flex: 1;
  }

  .feed {
    flex: 2;
  }
</style>
