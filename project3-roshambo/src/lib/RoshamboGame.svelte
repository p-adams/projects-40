<script lang="ts">
  import { afterUpdate } from "svelte";
  import { beats, shapes } from "./Game";
  import GameShape from "./GameShape.svelte";

  $: p1SelectedShape = null;
  $: p2SelectedShape = null;
  $: winner = null;
  $: rock = shapes["rock"];
  $: paper = shapes["paper"];
  $: scissors = shapes["scissors"];
  $: winnerStr = winner?.name
    ? winner?.name === "tie"
      ? `${winner.name}: ${winner?.shape} = ${winner.other}`
      : `${winner.name} wins, ${winner.shape} beats ${winner.other}`
    : "";

  function restartGame() {
    p1SelectedShape = null;
    p2SelectedShape = null;
    winner = null;
  }
  afterUpdate(() => {
    if (p1SelectedShape && p2SelectedShape) {
      const p1BeatsP2 = beats(p1SelectedShape, p2SelectedShape);
      if (p1BeatsP2 === "not found") {
        return;
      }

      if (p1BeatsP2 === "tie") {
        winner = {
          name: "tie",
          shape: p1SelectedShape.name,
          other: p2SelectedShape.name,
        };
        return;
      } else if (p1BeatsP2) {
        winner = {
          name: "player 1",
          shape: p1SelectedShape.name,
          other: p2SelectedShape.name,
        };
      } else {
        winner = {
          name: "player 2",
          shape: p2SelectedShape.name,
          other: p1SelectedShape.name,
        };
      }
    }
  });
</script>

<button class="Restart-button" on:click={() => restartGame()}>restart</button>
<div class="Roshambo-game">
  <div class="game-grid Left-side">
    <div class="Shape-wrapper">
      <GameShape
        shape={rock}
        on:selectShape={(event) => (p1SelectedShape = event.detail.shape)}
      />
    </div>
    <div class="Selected-Shape-wrapper">
      <GameShape
        shape={paper}
        on:selectShape={(event) => (p1SelectedShape = event.detail.shape)}
      />

      <div class="Selected-container">
        {p1SelectedShape?.name ?? "—"}
      </div>
    </div>
    <div class="Shape-wrapper">
      <GameShape
        shape={scissors}
        on:selectShape={(event) => (p1SelectedShape = event.detail.shape)}
      />
    </div>
  </div>
  <div class="Result-display">
    {winnerStr}
  </div>
  <div class="game-grid Right-side">
    <div class="Shape-wrapper">
      <GameShape
        shape={rock}
        on:selectShape={(event) => (p2SelectedShape = event.detail.shape)}
      />
    </div>
    <div class="Selected-Shape-wrapper">
      <GameShape
        shape={paper}
        on:selectShape={(event) => (p2SelectedShape = event.detail.shape)}
      />
      <div class="Selected-container">
        {p2SelectedShape?.name ?? "—"}
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
  .Restart-button {
    margin-bottom: 10px;
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
  .Selected-Shape-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  .Selected-container {
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    outline: 1px solid lightgray;
    margin: 0px 12px 0px 12px;
    padding: var(--card-padding);
  }
</style>
