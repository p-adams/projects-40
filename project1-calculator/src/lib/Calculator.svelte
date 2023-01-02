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
    height: 500px;
    width: 400px;
    padding: 20px;
  }
  .Input-container {
    height: 50px;
    margin-bottom: 20px;
    text-align: right;
  }
  .Input-screen {
    margin-right: 10px;
    font-size: 22px;
  }
  .Button-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
</style>
