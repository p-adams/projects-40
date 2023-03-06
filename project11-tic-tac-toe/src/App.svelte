<script lang="ts">
  let gameBoard = Array(9).fill(null);
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const P1_PIECE = "X";
  const P2_PIECE = "O";
  let isMyTurn = true;
  let winner = null;
  $: cellSelected = (x) =>
    gameBoard[x] === P1_PIECE || gameBoard[x] === P2_PIECE;

  function selectCell(x) {
    if (cellSelected(x) || winner) {
      return;
    }
    gameBoard[x] = isMyTurn ? P1_PIECE : P2_PIECE;
    isMyTurn = !isMyTurn;
    winner = getWinner(gameBoard);
  }
  function getWinner(board) {
    for (const row of wins) {
      const [a, b, c] = row;
      if (board[a] && board[a] === board[b] && board[b] === board[c])
        return `Winner ${board[a]}`;
    }
    return board.every((cell) => cell !== null) ? "Draw" : null;
  }
  function resetGame() {
    gameBoard = Array(9).fill(null);
    isMyTurn = true;
    winner = null;
  }
</script>

<main>
  <div />
  <h1>Tic-tac-toe</h1>
  <div class="Result">
    {#if winner}
      {winner}
      <button on:click={() => resetGame()}>reset</button>
    {/if}
  </div>

  <div class="card">
    <div class="Game">
      {#each gameBoard as row, x}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="Cell" on:click={() => selectCell(x)}>
          <div class="Piece">
            {#if row} {row} {/if}
          </div>
        </div>
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
  .Result {
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;
  }
</style>
