<script lang="ts">
  import SurveyCategorySidebar from "$lib/SurveyCategorySidebar.svelte";
  import { data } from "../lib/surveyData";
</script>

<div class="page">
  <SurveyCategorySidebar {data} />
  <main>
    <slot />
  </main>
</div>

<style>
  .page {
    display: flex;
  }
</style>
