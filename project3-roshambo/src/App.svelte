<script lang="ts">
  import RoshamboGame from "./lib/RoshamboGame.svelte";
</script>

<main>
  <h1>Rock paper scissors</h1>

  <div class="card">
    <RoshamboGame />
  </div>

  <p class="how-to-play">how to play</p>
</main>

<style>
  .how-to-play {
    color: #888;
  }
</style>
