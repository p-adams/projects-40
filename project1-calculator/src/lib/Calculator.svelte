<script lang="ts">
  import { keys, operations, type Key } from "./CalculatorUtils";
  let screenOutput = 0;
  let operationToPerform = "";
  let prevOperand = "";
  let currOperand = "";

  function processKey(key: Key) {
    // TODO: process key
    const operatorPattern = /[+*\/-]/g;
    // check for numeric value or operator / compute / clear string value
    if (typeof key.value === "string") {
      // check if value is an operator
      if (operatorPattern.test(key.value)) {
        if (currOperand === "") return;
        if (prevOperand !== "") {
          compute();
        }
        operationToPerform = key.value;
        prevOperand = currOperand;
        currOperand = "";
      } else {
        if (key.value === "=") {
          compute();
        } else if (key.value === "C") {
          clear();
        }
      }
    } else {
      // must be numeric value, so append value
      currOperand = currOperand.toString() + key.value.toString();
    }
  }
  function compute() {
    if (isNaN(Number(prevOperand)) || isNaN(Number(currOperand))) {
      return;
    }
    const operation = operations[operationToPerform](
      Number(prevOperand),
      Number(currOperand)
    );
    currOperand = operation;
    operationToPerform = undefined;
    prevOperand = "";
  }
  function clear() {
    operationToPerform = "";
    screenOutput = 0;
    currOperand = "";
    prevOperand = "";
  }
</script>

{prevOperand} - {currOperand}
<div class="Calculator">
  <div class="Output-container">
    <div class="Output-screen">{currOperand}</div>
  </div>
  <div class="Button-container">
    {#each keys as key}
      {#if key}
        <button class="Calculator-button" on:click={() => processKey(key)}
          >{key.label}</button
        >
      {:else}
        <div />
      {/if}
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
