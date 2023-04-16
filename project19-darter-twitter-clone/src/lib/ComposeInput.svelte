<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let compose: string;
  export let maxlength: number = 140;
  let textArea: HTMLTextAreaElement;
</script>

<div class="compose-dart">
  <textarea
    id="compose"
    {maxlength}
    bind:value={compose}
    bind:this={textArea}
    on:change={(e) => dispatch("composeDart", { dart: e.currentTarget.value })}
  />
  <label for="compose">
    <div class="char-count">{compose.length}{"/"}{maxlength}</div>
  </label>
</div>

<style>
  .compose-dart label {
    display: flex;
    flex-direction: column;
    justify-content: end;
  }
  .char-count {
    text-align: right;
  }
</style>
