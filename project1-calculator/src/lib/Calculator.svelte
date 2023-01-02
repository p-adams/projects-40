<script lang="ts">
  import { keys, type Key } from "./CalculatorKeys";
  let screenOutput = "0";
  function processKey(key: Key) {
    // TODO: process key
  }
</script>

<div class="Calculator">
  <div class="Output-container">
    <div class="Output-screen">{screenOutput}</div>
  </div>
  <div class="Button-container">
    {#each keys as key}
      <button on:click={() => processKey(key)}>{key.label}</button>
    {/each}
  </div>
</div>

<style>
  .Calculator {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 500px;
    width: 400px;
    padding: 20px;
    background-color: #36454f;
  }
  .Output-container {
    height: 80px;
    text-align: right;
    background-color: white;
  }
  .Output-screen {
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    margin-right: 10px;
    font-size: 22px;
  }
  .Button-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
  }
</style>
