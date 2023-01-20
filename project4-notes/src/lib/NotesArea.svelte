<script lang="ts">
  import { onMount } from "svelte";

  // TODO: implement notes app
  // using local storage to store notes data
  let area: HTMLTextAreaElement;
  $: note = "";
  onMount(() => {
    area.focus();
  });
</script>

<div class="Notes-area">
  <div class="Area-pane">
    <label for="notes">Create, edit, or view notes</label>
    <textarea id="notes" bind:this={area} bind:value={note} />
  </div>
  <div class="Preview-pane">
    <pre>{note}</pre>
  </div>
</div>

<style>
  .Notes-area {
    display: flex;
    flex-direction: column;
  }
  .Area-pane {
    display: flex;
    flex-direction: column;
  }
  .Preview-pane {
    margin-top: 10px;
  }
</style>
