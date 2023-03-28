<script lang="ts">
  import AppHeader from "$lib/AppHeader.svelte";
  import ComposeDialog from "$lib/ComposeDialog.svelte";
</script>

<AppHeader />
<main>
  <slot />
</main>
<footer>footer content here</footer>
<ComposeDialog />

<style global>
  @import "../app.css";
  main {
    flex-grow: 1;
    margin: 20px 40px 40px 40px;
    background-color: var(--lightGray);
  }
  footer {
    height: 40px;
    margin: 0px 40px 0px 40px;
  }
</style>
