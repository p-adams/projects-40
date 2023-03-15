<script lang="ts">
  let topText = "";
  let bottomText = "";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Home" />
</svelte:head>

<h1>Meme Generator</h1>
<div class="app-container">
  <div class="image-wrapper">
    <div class="text-wrapper">
      <div class="top-text">{topText}</div>
      <div class="bottom-text">{bottomText}</div>
    </div>
    <img src="https://via.placeholder.com/500" alt="Product" />
  </div>
  <div class="actions">
    <label>
      Top Text
      <input bind:value={topText} placeholder="top text here" />
    </label>
    <label>
      Bottom Text
      <input bind:value={bottomText} placeholder="bottom text here" />
    </label>
  </div>
</div>

<style>
  .app-container {
    display: flex;
    gap: 20px;
  }
  .image-wrapper {
    position: relative;
    text-align: center;
  }
  .image-wrapper img {
    width: 100%;
    height: auto;
  }
  .text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2em;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px #000;
  }
  .top-text {
  }
  .bottom-text {
  }
  .actions {
    display: flex;
    flex-direction: column;
  }
</style>
