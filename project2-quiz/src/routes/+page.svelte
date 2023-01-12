<script lang="ts">
  import { quiz } from "../quiz";
  let submitted = false;
</script>

<svelte:head>
  <title>Quiz</title>
  <style>
    html,
    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    h1 {
      margin: 0;
      padding: 0;
    }
  </style>
</svelte:head>
<main>
  <article>
    <h1>{quiz.name}</h1>
    <article class="Quiz--questions">
      {#each quiz.questions as question}
        <section
          class={`Quiz-question ${
            submitted
              ? question.answer === question.selected
                ? "correct"
                : "incorrect"
              : ""
          }`}
        >
          <h2>{question.title}</h2>
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
      <button class="Submit--button" on:click={() => (submitted = true)}
        >{!submitted ? "submit" : "view results"}</button
      >
    </article>
    {#if quiz.keywords}
      <p>keywords:</p>
      <div class="Keyword-container">
        {#each quiz.keywords as keyword}
          <div class="Keyword">{keyword}</div>
        {/each}
      </div>
      <div />{/if}
  </article>
</main>

<style>
  main {
    height: 100vh;
  }
  article {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
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

  .Quiz--questions {
    flex: 1;
  }
  .Quiz-question {
    padding: 8px;
  }
  .Submit--button {
    width: fit-content;
  }
  .Keyword-container {
    display: flex;
  }
  .Keyword {
    border: 1px solid lightgray;
    width: fit-content;
    padding: 2px;
    border-radius: 14px;
  }
</style>
