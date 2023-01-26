<script lang="ts">
  import { afterUpdate, onMount, createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import type { MenuModes } from "./datatypes";
  export let menuMode: MenuModes = null;
  export let selectedNote = null;
  export let noteInput = "";
  // TODO: implement notes app
  // using local storage to store notes data
  let area: HTMLTextAreaElement;
  $: note = null;

  function handleInput(target: EventTarget) {
    dispatch("notesAreaInput", {
      value: (target as HTMLTextAreaElement).value,
    });
  }
  afterUpdate(() => {
    if (area) {
      area.focus();
    }
  });
</script>

<div class="Notes-area">
  {#if menuMode !== "read"}
    <div class="Area-pane">
      <label for="notes">Create, edit, or view notes</label>
      <textarea
        id="notes"
        bind:this={area}
        value={noteInput}
        on:input={(e) => handleInput(e.target)}
      />
    </div>
  {:else}
    <div class="Preview-pane">
      <pre>{selectedNote?.body}</pre>
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
