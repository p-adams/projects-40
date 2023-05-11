<script lang="ts">
  import SurveyCategorySidebar from "$lib/SurveyCategorySidebar.svelte";
  import { data } from "../lib/surveyData";
</script>

<SurveyCategorySidebar {data} />
<main>
  <slot />
</main>
