<script lang="ts">
  // TODO: implement roshambo
</script>

<div class="Roshambo-game">
  <div class="game-grid Left-side">
    <div class="Shape-wrapper">
      <div class="Shape">R</div>
    </div>

    <div class="Selected-wrapper">
      <div class="Shape">P</div>
      <div class="Selected-container">selected</div>
    </div>
    <div class="Shape-wrapper">
      <div class="Shape">S</div>
    </div>
  </div>
  <div class="Result-display">b</div>
  <div class="game-grid Right-side">c</div>
</div>

<style>
  :root {
    --height: 300px;
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
    height: 60%;
    margin: 0px 4px 4px 4px;
  }
  .Shape {
    outline: 1px solid black;
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
  .Result-display {
    flex: 2;
    height: var(--height);
    outline: 1px solid lightgray;
    margin: 0px 12px 0px 12px;
  }
</style>
