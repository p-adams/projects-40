<script lang="ts">
  // TODO: implement roshambo
</script>

<div class="Roshambo-game">
  <div class="game-grid Left-side">a</div>
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
    flex: 1;
    width: 500px;
    height: var(--height);
    outline: 1px solid lightgray;
  }
  .Result-display {
    flex: 2;
    height: var(--height);
    outline: 1px solid lightgray;
    margin: 0px 12px 0px 12px;
  }
</style>
