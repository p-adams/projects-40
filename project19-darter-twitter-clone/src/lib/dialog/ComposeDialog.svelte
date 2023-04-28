<script lang="ts">
  import dialogStore from "./composeDialogStore";
  import composeStore from "../compose/composeStore";
  import feedStore from "../feed/feedStore";
  import meStore from "$lib/me/store";
  import AppDialog from "$lib/dialog/AppDialog.svelte";
  import ComposeInput from "../compose/ComposeInput.svelte";

  let compose = "";
  let feedId = "";
  function confirm() {
    composeStore.setContent(compose);
    feedStore.addToFeed({
      text: compose,
      date: new Date(),
    });
    compose = "";
    dialogStore.closeDialog();
  }
  function createFeed() {
    meStore.set(feedId);
    dialogStore.closeDialog();
  }
</script>

<AppDialog
  show={$dialogStore?.open}
  on:confirm={(_e) => {
    !$meStore?.feedId ? createFeed() : confirm();
  }}
  on:cancel={(_e) => dialogStore.closeDialog()}
>
  <div class="content">
    {#if $meStore?.feedId}
      <h2>Compose Dart</h2>

      <ComposeInput
        bind:compose
        on:composeDart={(e) => (compose = e.detail.dart)}
      />
    {:else}
      <input bind:value={feedId} placeholder="enter feed ID" />
    {/if}
  </div>
</AppDialog>

<style>
  .content {
    margin-bottom: 20px;
  }

  h2 {
    color: var(--darkNavy);
  }
</style>
