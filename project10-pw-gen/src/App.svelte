<script lang="ts">
  import { nanoid } from "nanoid";
  let password = nanoid();
</script>

<main>
  <div />
  <h1>PW GEN</h1>

  <div class="card">
    <div class="Prompt">
      <button on:click={() => (password = nanoid())}>Generate Password</button>
    </div>
    <div class="Result">
      <div class="Display">{password}</div>
      <button on:click={() => navigator.clipboard.writeText(password)}
        >Copy</button
      >
    </div>
  </div>
</main>

<style>
  .Prompt {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 4;
  }
  .Result {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .Display {
    font-weight: bold;
  }
</style>
