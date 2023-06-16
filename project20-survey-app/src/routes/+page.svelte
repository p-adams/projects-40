<script lang="ts">
  import SurveyGroups from "$lib/SurveyGroups.svelte";
  import surveyStore from "$lib/surveyStore.js";
  import bedrock from "../assets/bedrock.png";
  export let data;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="Description" content="Home" />
</svelte:head>
<main>
  <section>
    <h1>Stone Age Adventures Extreme Excursion</h1>
    <img src={bedrock} alt="Bedrock town" />
  </section>

  {#each data.surveyData as $data}
    <SurveyGroups data={$data} />
  {/each}
  <button on:click={() => surveyStore.submitSurvey(data.userID)}>Submit</button>
</main>
<p>
  Visit <a href="/">kit.svelte.dev</a> for more info
</p>

<style>
  main {
    display: flex;
    flex-direction: column;
  }
</style>
