<script lang="ts">
  export let generateDisabled = false;
</script>

<form method="POST" action="?/generate">
  <label>
    <slot />
    <button disabled={generateDisabled}>Generate Token</button>
  </label>
</form>
