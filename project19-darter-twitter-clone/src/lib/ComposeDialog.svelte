<script lang="ts">
  import dialogStore from "./composeDialogStore";
  import composeStore from "./composeStore";
  import AppDialog from "$lib/AppDialog.svelte";
  let show: boolean;
  dialogStore.openSubscribe((value) => (show = value));
</script>

<AppDialog
  {show}
  on:confirm={(_e) => dialogStore.closeDialog()}
  on:cancel={(_e) => dialogStore.closeDialog()}
>
  <div class="content">
    <h2>Compose Dart</h2>
    <textarea
      on:change={(e) => composeStore.setContent(e.currentTarget.value)}
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
