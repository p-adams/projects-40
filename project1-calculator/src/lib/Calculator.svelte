<script lang="ts">
  import { keys } from "./CalculatorKeys";
  let screenInput = "0";
</script>

<div class="Calculator">
  <div class="Input-container">
    <div class="Input-screen">{screenInput}</div>
  </div>
  <div class="Button-container">
    {#each keys as key}
      <button>{key.label}</button>
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
  .Input-container {
    height: 80px;
    text-align: right;
    background-color: white;
  }
  .Input-screen {
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
