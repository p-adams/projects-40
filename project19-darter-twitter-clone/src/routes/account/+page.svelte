<script lang="ts">
  import meStore from "$lib/me/store";
  let feedId = "";
</script>

{#if $meStore?.feedId}
  account details {$meStore.feedId}
{:else}
  <input bind:value={feedId} placeholder="enter feed ID" />
  <button on:click={() => meStore.set(feedId)}>enter</button>
{/if}
