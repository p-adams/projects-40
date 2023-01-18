<script lang="ts">
  import GameShape from "./GameShape.svelte";

  // TODO: implement roshambo
  export let shapes: Array<App.Shape> = [
    { name: "rock", abbr: "R" },
    { name: "paper", abbr: "P" },
    { name: "scissors", abbr: "S" },
  ];
  let p1SelectedShape: App.Shape | null = null;
  let p2SelectedShape: App.Shape | null = null;
  $: rock = shapes[0];
  $: paper = shapes[1];
  $: scissors = shapes[2];
</script>

<div class="Roshambo-game">
  <div class="game-grid Left-side">
    <div class="Shape-wrapper">
      <GameShape
        shape={rock}
        on:selectShape={(event) => (p1SelectedShape = event.detail.shape)}
      />
    </div>
    <div class="Selected-wrapper">
      <GameShape
        shape={paper}
        on:selectShape={(event) => (p1SelectedShape = event.detail.shape)}
      />

      <div class="Selected-container">
        {p1SelectedShape ? p1SelectedShape.abbr : "—"}
      </div>
    </div>
    <div class="Shape-wrapper">
      <GameShape
        shape={scissors}
        on:selectShape={(event) => (p1SelectedShape = event.detail.shape)}
      />
    </div>
  </div>
  <div class="Result-display">b</div>
  <div class="game-grid Right-side">
    <div class="Shape-wrapper">
      <GameShape
        shape={rock}
        on:selectShape={(event) => (p2SelectedShape = event.detail.shape)}
      />
    </div>
    <div class="Selected-wrapper">
      <GameShape
        shape={paper}
        on:selectShape={(event) => (p2SelectedShape = event.detail.shape)}
      />
      <div class="Selected-container">
        {p2SelectedShape ? p2SelectedShape.abbr : "—"}
      </div>
    </div>
    <div class="Shape-wrapper">
      <GameShape
        shape={scissors}
        on:selectShape={(event) => (p2SelectedShape = event.detail.shape)}
      />
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

  .Result-display {
    flex: 2;
    height: var(--height);
    outline: 1px solid lightgray;
    margin: 0px 12px 0px 12px;
    padding: var(--card-padding);
  }
</style>
