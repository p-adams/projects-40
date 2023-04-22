<script lang="ts">
  import dialogStore from "./composeDialogStore";
  import composeStore from "../compose/composeStore";
  import feedStore from "../feed/feedStore";
  import AppDialog from "$lib/dialog/AppDialog.svelte";
  import ComposeInput from "../compose/ComposeInput.svelte";
  let show: boolean;
  dialogStore.openSubscribe((value) => (show = value));
  let compose = "";
  function confirm() {
    composeStore.setContent(compose);
    feedStore.addToFeed("me", {
      username: "me",
      text: compose,
      date: new Date(),
    });
    compose = "";
    dialogStore.closeDialog();
  }
</script>

<AppDialog
  {show}
  on:confirm={(_e) => confirm()}
  on:cancel={(_e) => dialogStore.closeDialog()}
>
  <div class="content">
    <h2>Compose Dart</h2>

    <ComposeInput
      bind:compose
      on:composeDart={(e) => (compose = e.detail.dart)}
    />
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
