<script lang="ts">
  import AppHeader from "$lib/AppHeader.svelte";
  import ComposeDialog from "$lib/ComposeDialog.svelte";
</script>

<AppHeader />
<main>
  <slot />
</main>

<ComposeDialog />

<style global>
  @import "../app.css";
  main {
    margin: 20px 40px 0px 40px;
  }
</style>
