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
      <div class="Note-title">{note.body}</div>
    </div>
  {/each}
</div>

<style>
  .Notes-list {
    display: flex;
    flex-direction: column;
    flex: 1;
    border-right: 1px solid lightgray;
    margin-right: 8px;
  }
  .note {
    cursor: pointer;
    padding: 8px;
  }
  .Note-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 25ch;
  }
  .selected {
    outline: 1px solid lightblue;
  }
</style>
