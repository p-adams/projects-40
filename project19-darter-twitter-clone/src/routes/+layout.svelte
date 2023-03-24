<script lang="ts">
  import AppHeader from "$lib/AppHeader.svelte";
</script>

<AppHeader />
<main>
  <slot />
</main>

<style>
  /**
    COLOR PALETTE:
    #003049 - This is a dark navy blue color that can be used for headings and buttons.
    #F77F00 - This is a warm orange color that can be used for accents and calls to action.
    #D62828 - This is a deep red color that can be used sparingly for emphasis.
    #EAEAEA - This is a light gray color that can be used for backgrounds or as a secondary color for text.
    #FFFFFF - This is a pure white color that can be used for backgrounds and text.
  */
  main {
    margin: 0px 40px 0px 40px;
  }
</style>
