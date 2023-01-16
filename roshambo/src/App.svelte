<script lang="ts">
  import RoshamboGame from "./lib/RoshamboGame.svelte";
</script>

<main>
  <h1>Roshambo</h1>

  <div class="card">
    <RoshamboGame />
  </div>

  <p class="read-the-docs">how to play/p></p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
