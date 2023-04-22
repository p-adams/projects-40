<script lang="ts">
  import feedStore from "$lib/feed/feedStore.js";
  export let data;
</script>

profile {data.slug}<button on:click={() => feedStore.subscribeToFeed(data.slug)}
  >subscribe</button
>
<button on:click={() => feedStore.unsubscribeToFeed(data.slug)}
  >unsubscribe</button
>
