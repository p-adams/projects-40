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
    {#each dartFeed as feedItem}
      <div>{feedItem.text}</div>
    {/each}
  </section>
</div>

<style>
  .home {
    display: flex;
    gap: 10px;
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
