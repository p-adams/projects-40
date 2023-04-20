<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher<Lib.DialogEvent>();
  export let show = true;
</script>

<dialog open={show}>
  <form method="dialog">
    <slot />
    <div>
      <button on:click={() => dispatch("cancel", { show })}>close</button>
      <button on:click={() => dispatch("confirm", { show })}>confirm</button>
    </div>
  </form>
</dialog>

<style>
  form {
    display: flex;
    flex-direction: column;
  }
</style>
