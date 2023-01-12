<script lang="ts">
  import { quizQuestions } from "../quiz";
  let submitted = false;
</script>

<svelte:head>
  <title>Quiz</title>
</svelte:head>
<main>
  <article>
    <h1>Web Development Quiz Demo</h1>
    <article class="Quiz--questions">
      {#each quizQuestions as question}
        <section
          class={`Quiz-question ${
            submitted
              ? question.answer === question.selected
                ? "correct"
                : "incorrect"
              : ""
          }`}
        >
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
        </section>
      {/each}
      <button on:click={() => (submitted = true)}
        >{!submitted ? "submit" : "view results"}</button
      >
    </article>
  </article>
</main>

<style>
  h2 {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style-type: upper-alpha;
  }
  .correct {
    border: 1px solid lightgreen;
  }
  .incorrect {
    border: 1px solid lightcoral;
  }
</style>
