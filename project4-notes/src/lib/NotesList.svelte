<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let notes = [];
  export let selectedNote = null;
</script>

<div class="Notes-list">
  {#each notes as note}
    <div
      class={`note ${selectedNote?.id === note.id ? "selected" : ""}`}
      on:click={() => dispatch("selectNote", { note })}
      aria-hidden="true"
    >
      {note.title}
    </div>
  {/each}
</div>

<style>
  .note {
    cursor: pointer;
  }
  .selected {
    outline: 1px solid lightblue;
  }
</style>
