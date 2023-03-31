<script lang="ts">
  import FeedList from "$lib/FeedList.svelte";
  import ProfileCard from "$lib/ProfileCard.svelte";
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
  <FeedList />
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
