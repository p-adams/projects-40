<script lang="ts">
  import store from "./composeDialogStore";
  import AppDialog from "$lib/AppDialog.svelte";
  let show: boolean;
  store.openSubscribe((value) => (show = value));
</script>

<AppDialog
  {show}
  on:confirm={(_e) => store.closeDialog()}
  on:cancel={(_e) => store.closeDialog()}
>
  <div class="content">
    <h2>Compose Dart</h2>
    <textarea on:change={(e) => store.setContent(e.currentTarget.value)} />
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
