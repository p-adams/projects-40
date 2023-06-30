<script lang="ts">
  import photo from "$lib/assets/photo.png";
  let pic = null;
</script>

<h1>Photo Share</h1>
<img src={photo} alt="stock" bind:this={pic} />
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<style>
  img {
    width: 300px;
    height: 300px;
  }
</style>
