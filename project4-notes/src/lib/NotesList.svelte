<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let notes = [];
</script>

<div class="Notes-list">
  {#each notes as note}
    <div on:click={() => dispatch("selectNote", { note })} aria-hidden="true">
      {note.title}
    </div>
  {/each}
</div>
