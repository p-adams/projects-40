<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let shape: App.Shape | null;
  const dispatch = createEventDispatcher();
</script>

<div
  class="Shape"
  on:click={() => dispatch("selectShape", { shape })}
  aria-hidden="true"
>
  {shape.abbr}
</div>

<style>
  .Shape {
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 1px solid black;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
  }
</style>
