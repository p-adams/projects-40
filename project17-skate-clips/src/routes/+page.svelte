<script lang="ts">
  type Clip = { title: string; featured: string; src: string };
  const clips: Array<Clip> = [
    {
      title: "2411-QJ02 HD24",
      featured: "Bobby de Keyzer",
      src: "https://i.imgur.com/cQZyxV0.mp4",
    },
  ];
  let selectedClip: Clip | null = clips[0];
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="home" />
</svelte:head>
<section>
  <h1>Skate Clips</h1>
  <div class="Clips-app">
    <video controls src={selectedClip?.src ?? ""} width="600">
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
  </div>
</section>

<style>
  .Clips-app {
    display: flex;
  }
</style>
