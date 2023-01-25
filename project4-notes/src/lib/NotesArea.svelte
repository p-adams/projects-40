<script lang="ts">
  import { onMount } from "svelte";
  import type { MenuModes } from "./datatypes";
  export let menuMode: MenuModes = null;
  export let selectedNote = null;
  // TODO: implement notes app
  // using local storage to store notes data
  let area: HTMLTextAreaElement;
  $: note = "";
  onMount(() => {
    if (area) {
      area.focus();
    }
  });
</script>

<div class="Notes-area">
  {#if menuMode !== "read"}
    <div class="Area-pane">
      <label for="notes">Create, edit, or view notes</label>
      <textarea id="notes" bind:this={area} bind:value={note} />
    </div>
  {:else}
    <div class="Preview-pane">
      <pre>{selectedNote.body}</pre>
    </div>
  {/if}
</div>

<style>
  .Notes-area {
    display: flex;
    flex-direction: column;
    flex: 3;
  }
  .Area-pane {
    display: flex;
    flex-direction: column;
  }
  .Preview-pane {
    width: 500px;
    margin-top: 10px;
  }
</style>
