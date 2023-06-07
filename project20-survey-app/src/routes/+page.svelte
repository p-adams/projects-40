<script lang="ts">
  import SurveyGroups from "$lib/SurveyGroups.svelte";
  import surveyStore from "$lib/surveyStore.js";
  export let data;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="Description" content="Home" />
</svelte:head>
<h1>TBD</h1>
{#each data.surveyData as $data}
  <SurveyGroups data={$data} />
{/each}
<button on:click={() => surveyStore.submitSurvey(data.userID)}>Submit</button>
<p>
  Visit <a href="/">kit.svelte.dev</a> for more info
</p>
