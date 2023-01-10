<script lang="ts">
  import { quizQuestions } from "../quiz";
</script>

<svelte:head>
  <title>Quiz</title>
</svelte:head>
<main>
  <article>
    <h1>Web Development Quiz Demo</h1>
    <article class="Quiz--question">
      {#each quizQuestions as question}
        <h2>Which of the following is not a position value</h2>
        <ul>
          {#each question.choices as choice}
            <li>
              <label
                ><input
                  type="radio"
                  bind:group={question.selected}
                  value={choice.value}
                />{choice.label}</label
              >
            </li>
          {/each}
        </ul>
      {/each}
    </article>
  </article>
</main>

<style>
  ul {
    list-style-type: upper-alpha;
  }
</style>
