<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<button class="compose" on:click={() => dispatch("compose")} title="compose"
  ><i class="fa-solid fa-paper-plane" /></button
>

<style>
  .compose {
    height: 30px;
    width: 40px;
    background-color: var(--orangeAccent);
    color: var(--pureWhite);
  }
</style>
