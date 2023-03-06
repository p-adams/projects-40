<script lang="ts">
  let gameBoard = [...Array(3)].map((_) => Array(3).fill(""));
  const P1_PIECE = "X";
  const P2_PIECE = "O";
  let isMyTurn = true;

  $: cellSelected = (x, y) =>
    gameBoard[x][y] === P1_PIECE || gameBoard[x][y] === P2_PIECE;
  function selectCell(x, y) {
    if (cellSelected(x, y)) {
      return;
    }
    gameBoard[x][y] = isMyTurn ? P1_PIECE : P2_PIECE;
    isMyTurn = !isMyTurn;
  }
</script>

<main>
  <div />
  <h1>Tic-tac-toe</h1>

  <div class="card">
    <div class="Game">
      {#each gameBoard as row, x}
        {#each row as cell, y}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div class="Cell" on:click={() => selectCell(x, y)}>
            <div class="Piece">{cell}</div>
          </div>
        {/each}
      {/each}
    </div>
  </div>
</main>

<style>
  .card {
    background-color: #14bdac;
  }
  .Game {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }
  .Cell {
    width: 4em;
    height: 4em;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: white;
  }
  .Piece {
    font-size: 32px;
    font-weight: bold;
    color: gray;
  }
</style>
