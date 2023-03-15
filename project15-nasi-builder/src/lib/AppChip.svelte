<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { SelectItem } from "../lib/types";
  export let item: SelectItem;
  const dispatch = createEventDispatcher();
</script>

<div class="chip">
  <span>{item.label}</span>
  <button on:click={() => dispatch("remove", { item })}>X</button>
</div>

<style>
  .chip {
    display: flex;
    justify-content: end;
    align-items: center;
    width: fit-content;
    border: 1px solid lightgray;
    padding: 10px;
    border-radius: 30px;
    font-size: small;
    margin-bottom: 4px;
    margin-right: 4px;
  }
  .chip button {
    font-size: 10px;
    margin-left: 4px;
  }
</style>
