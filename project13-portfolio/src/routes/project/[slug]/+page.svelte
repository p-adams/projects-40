<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>Project {data.slug}</title>
  <meta name="description" content="Project" />
</svelte:head>
<section>
  <a href="/projects">return</a>
  <h3>project detail {data.slug}</h3>
</section>
