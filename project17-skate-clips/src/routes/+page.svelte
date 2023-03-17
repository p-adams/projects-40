<script lang="ts">
  type Clip = { title: string; featured: string; src: string };
  const FALLBACK_CLIP =
    "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";
  const clips: Array<Clip> = [
    {
      title: "2411-QJ02 HD24",
      featured: "Bobby de Keyzer",
      src: "https://i.imgur.com/cQZyxV0.mp4",
    },
  ];
  let selectedClip: Clip | undefined = clips[0];
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="home" />
</svelte:head>
<section>
  <h1>Skate Clips</h1>

  <div class="Clips-app">
    {#if clips.length > 0}
      <video controls src={selectedClip?.src ?? FALLBACK_CLIP} width="600">
        <track default kind="captions" srclang="en" src="" />
      </video>
      <div>
        <ul>
          {#each clips as clip}
            <li on:click={() => (selectedClip = clip)} aria-hidden="true">
              {clip.featured} - {clip.title}
            </li>
          {/each}
        </ul>
      </div>
    {:else}
      <div>No videos found :(</div>
    {/if}
  </div>
</section>

<style>
  .Clips-app {
    display: flex;
  }
</style>
