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
    <div>profile/compose card</div>
    <div>follow</div>
    <div>trending</div>
  </section>
  <section class="feed">
    <h1 class="feed-title">Darts</h1>
    <div>
      {#each dartFeed as feedItem}
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
