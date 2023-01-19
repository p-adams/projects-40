<script lang="ts">
  import type { Shape } from "./datatypes";
  import { createEventDispatcher } from "svelte";
  export let shape: Shape | null;
  const dispatch = createEventDispatcher<{
    selectShape: { shape: Shape };
  }>();
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
