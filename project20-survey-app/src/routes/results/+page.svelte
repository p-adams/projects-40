<script lang="ts">
  import ResultGroups from "$lib/ResultGroups.svelte";

  export let data;
</script>

<svelte:head>
  <title>Results</title>
  <meta name="Description" content="Results" />
</svelte:head>
<main>
  <section>
    <h1>Survey Results</h1>
    {#each data.surveyData as $data}
      <ResultGroups data={$data} responses={data.responses} />
    {/each}
  </section>
</main>
