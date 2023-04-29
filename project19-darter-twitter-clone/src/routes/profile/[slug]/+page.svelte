<script lang="ts">
  import feedStore from "$lib/feed/feedStore.js";
  import meStore from "$lib/me/store";
  export let data;
  $: isSubscribed = $feedStore[data.slug];
</script>

profile {data.slug}

{#if !$meStore?.feedId}
  <a href="/account">create feed id</a> to subscribe to {data.slug} feed
{:else if $meStore.feedId !== data.slug}
  {#if !isSubscribed}
    <button on:click={() => feedStore.subscribeToFeed(data.slug)}
      >subscribe to {data.slug}</button
    >
  {:else}
    <button on:click={() => feedStore.unsubscribeToFeed(data.slug)}
      >unsubscribe from {data.slug}</button
    >
  {/if}
{/if}
