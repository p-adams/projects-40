<script lang="ts">
  export let data;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="Description" content="Home" />
</svelte:head>
<h1>State of Skateboarding 2023</h1>
{#each data.surveyData as $data}
  <div>{$data.name}</div>
{/each}
<p>
  Visit <a href="/">kit.svelte.dev</a> for more info
</p>
