<script lang="ts">
  import FeedList from "$lib/feed/FeedList.svelte";
  import ProfileCard from "$lib/ProfileCard.svelte";
  import feedStore from "$lib/feed/feedStore";

  import { afterUpdate } from "svelte";
  import { allFeeds } from "$lib/helpers";
  let feeds: Lib.Feeds = {};
  $: feed = allFeeds(feeds);

  afterUpdate(() => feedStore.subscribe((f) => (feeds = f)));
</script>

<svelte:head>
  <title>Home</title>
  <meta name="Description" content="Home" />
</svelte:head>
<div class="home">
  <section class="main side">
    <div><ProfileCard /></div>
    <div>follow</div>
    <div>trending</div>
  </section>
  <FeedList {feed} />
</div>

<style>
  .home {
    display: flex;
    gap: 10px;
  }
  .side {
    flex: 1;
  }
</style>
