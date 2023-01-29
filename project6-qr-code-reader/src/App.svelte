<script lang="ts">
  import { afterUpdate } from "svelte";
  import { Html5Qrcode } from "html5-qrcode";
  $: files = null;
  $: result = null;
  afterUpdate(() => {
    const reader = new Html5Qrcode("reader");
    if (files) {
      reader
        .scanFile(files[0], true)
        .then((text) => (result = text))
        .catch((err) => console.log(err));
    }
  });
</script>

<main>
  <h1>QR Code Reader</h1>
  <div class="card">
    <form>
      <label for="file-upload">QR Code Image Upload</label>
      <input id="file-upload" type="file" bind:files />
    </form>
    <div class="Reader-wrapper">
      <div id="reader" />
      <div class="Result">
        {result ?? "Waiting..."}
      </div>
    </div>
  </div>
</main>

<style>
  .Reader-wrapper {
    display: flex;
  }
  .Result {
    align-self: center;
  }
</style>
