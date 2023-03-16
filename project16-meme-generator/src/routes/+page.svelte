<script lang="ts">
  import FontOptions from "$lib/FontOptions.svelte";

  let topText = { text: "", color: "", size: "" };
  let bottomText = { text: "", color: "", size: "" };
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Home" />
</svelte:head>

<h1>Meme Generator</h1>
<div class="app-container">
  <div class="image-wrapper">
    <div class="text-wrapper">
      <div
        class="top-text"
        style={`color: ${topText.color}; font-size: ${topText.size}`}
      >
        {topText.text}
      </div>
      <div
        class="bottom-text"
        style={`color: ${bottomText.color}; font-size: ${bottomText.size}`}
      >
        {bottomText.text}
      </div>
    </div>
    <img src="https://via.placeholder.com/500" alt="Product" />
  </div>
  <div class="actions">
    <label>
      Top Text
      <input bind:value={topText.text} placeholder="top text here" />
      <FontOptions
        on:colorSelect={(e) => (topText.color = e.detail.color)}
        on:sizeSelect={(e) => (topText.size = e.detail.size)}
      />
    </label>
    <label>
      Bottom Text
      <input bind:value={bottomText.text} placeholder="bottom text here" />
      <FontOptions
        on:colorSelect={(e) => (bottomText.color = e.detail.color)}
        on:sizeSelect={(e) => (bottomText.size = e.detail.size)}
      />
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
  }
  .actions {
    display: flex;
    flex-direction: column;
  }
</style>
