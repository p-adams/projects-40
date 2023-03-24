<script lang="ts">
  import AppHeader from "$lib/AppHeader.svelte";
</script>

<AppHeader />
<main>
  <slot />
</main>

<style global>
  @import "../app.css";
  main {
    margin: 20px 40px 0px 40px;
  }
</style>
