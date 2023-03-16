<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  const fontSizeOptions = ["12px", "18px", "22px", "32px", "64px", "72px"];
  const fontColor = ["#FFFFFF", "#000000"];
</script>

<div class="font-options">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="font-color-option">
    {#each fontColor as color}
      <div
        class="color"
        style={`background-color: ${color}`}
        on:click={() => dispatch("colorSelect", { color })}
      />
    {/each}
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="font-size-options">
    {#each fontSizeOptions as size}
      <div on:click={() => dispatch("sizeSelect", { size })}>
        {size}
      </div>
    {/each}
  </div>
</div>

<style>
  .font-options * {
    display: flex;
    gap: 10px;
  }
  .color {
    width: 80px;
    height: 80px;
    border: 1px solid gray;
    border-radius: 4px;
  }
</style>
