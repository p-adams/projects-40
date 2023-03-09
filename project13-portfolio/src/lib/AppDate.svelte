<script lang="ts">
  import { onMount } from "svelte";
  let time = new Date();
  $: date = time.toLocaleString();
  onMount(() => {
    const interval = setInterval(() => {
      time = new Date();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

{date}
