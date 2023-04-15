<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let compose: string;
  let textArea: HTMLTextAreaElement;
</script>

<div class="compose-dart">
  <textarea
    bind:value={compose}
    bind:this={textArea}
    on:change={(e) => dispatch("composeDart", { dart: e.currentTarget.value })}
  />
</div>
