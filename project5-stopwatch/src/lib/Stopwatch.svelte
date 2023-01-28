<script lang="ts">
  $: [hour, minute, second, ms] = [0, 0, 0, 0];
  $: timer = false;
  const start = () => {
    timer = true;
    run();
  };
  const stop = () => {
    timer = false;
  };
  const reset = () => {
    timer = false;
    [hour, minute, second, ms] = [0, 0, 0, 0];
  };
  function run() {
    if (timer) {
      ++ms;
      if (ms === 100) {
        ++second;
        ms = 0;
      }
      if (second === 60) {
        ++minute;
      }
      if (minute === 60) {
        ++hour;
        minute = 0;
        second = 0;
      }

      setTimeout(run, 10);
    }
  }
</script>

<div class="Stopwatch--app">
  <div class="Display">
    {hour}:{minute}:{second}:{ms}
  </div>
  <div>
    <button on:click={start}> start </button>
    <button on:click={stop}> stop </button>
    <button on:click={reset}> reset </button>
  </div>
</div>

<style>
  .Stopwatch--app {
    display: flex;
    flex-direction: column;
  }
  .Display {
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 1px solid gray;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin-bottom: 18px;
  }
</style>
