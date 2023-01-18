<script lang="ts">
  // TODO: implement roshambo
  let shapes: Array<{ name: string; abbr: string }> = [
    { name: "rock", abbr: "R" },
    { name: "paper", abbr: "P" },
    { name: "scissors", abbr: "S" },
  ];
  let p1SelectedShape: { name: string; abbr: string } | null = null;
  let p2SelectedShape: { name: string; abbr: string } | null = null;
  $: rock = shapes[0];
  $: paper = shapes[1];
  $: scissors = shapes[2];
</script>

<div class="Roshambo-game">
  <div class="game-grid Left-side">
    <div class="Shape-wrapper">
      <div
        class="Shape"
        on:click={() => (p1SelectedShape = rock)}
        aria-hidden="true"
      >
        {rock.abbr}
      </div>
    </div>
    <div class="Selected-wrapper">
      <div
        class="Shape"
        on:click={() => (p1SelectedShape = paper)}
        aria-hidden="true"
      >
        {paper.abbr}
      </div>
      <div class="Selected-container">
        {p1SelectedShape ? p1SelectedShape.abbr : "—"}
      </div>
    </div>
    <div class="Shape-wrapper">
      <div
        class="Shape"
        on:click={() => (p1SelectedShape = scissors)}
        aria-hidden="true"
      >
        {scissors.abbr}
      </div>
    </div>
  </div>
  <div class="Result-display">b</div>
  <div class="game-grid Right-side">
    <div class="Shape-wrapper">
      <div
        class="Shape"
        on:click={() => (p2SelectedShape = rock)}
        aria-hidden="true"
      >
        {rock.abbr}
      </div>
    </div>
    <div class="Selected-wrapper">
      <div
        class="Shape"
        on:click={() => (p2SelectedShape = paper)}
        aria-hidden="true"
      >
        {paper.abbr}
      </div>
      <div class="Selected-container">
        {p2SelectedShape ? p2SelectedShape.abbr : "—"}
      </div>
    </div>
    <div class="Shape-wrapper">
      <div
        class="Shape"
        on:click={() => (p2SelectedShape = scissors)}
        aria-hidden="true"
      >
        {scissors.abbr}
      </div>
    </div>
  </div>
</div>

<style>
  :root {
    --height: 250px;
    --card-padding: 6px;
  }
  .Roshambo-game {
    display: flex;
  }
  .game-grid {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    flex: 1;
    width: 500px;
    height: var(--height);
    outline: 1px solid lightgray;
    padding: var(--card-padding);
  }

  .Shape-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
  }
  .Selected-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  .Selected-container {
    outline: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 60%;
    width: 60%;
    margin: 0px 4px 4px 4px;
  }
  .Shape {
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 1px solid black;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
  }
  .Result-display {
    flex: 2;
    height: var(--height);
    outline: 1px solid lightgray;
    margin: 0px 12px 0px 12px;
    padding: var(--card-padding);
  }
</style>
