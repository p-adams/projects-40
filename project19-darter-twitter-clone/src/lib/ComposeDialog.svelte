<script lang="ts">
  import dialogStore from "./composeDialogStore";
  import composeStore from "./composeStore";
  import AppDialog from "$lib/AppDialog.svelte";
  let show: boolean;
  dialogStore.openSubscribe((value) => (show = value));
  let compose = "";
  let textArea: HTMLTextAreaElement;
  function confirm() {
    composeStore.setContent(compose);
    textArea.value = "";
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
    <textarea
      bind:this={textArea}
      on:change={(e) => (compose = e.currentTarget.value)}
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
