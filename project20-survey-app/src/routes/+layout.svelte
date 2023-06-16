<script lang="ts">
  import SurveyCategorySidebar from "$lib/SurveyCategorySidebar.svelte";
  import { data } from "../lib/surveyData";
</script>

<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/results">View Results</a></li>
    </ul>
  </nav>
</header>
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
