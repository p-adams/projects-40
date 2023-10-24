<script>
  import welcome from "$lib/images/svelte-welcome.webp";
  import welcome_fallback from "$lib/images/svelte-welcome.png";
  import ContentCard from "$lib/components/ContentCard.svelte";
  export let data;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="UlumStream" />
</svelte:head>

<section>
  <h1>UlumStream</h1>

  <div class="hero-banner">
    <picture>
      <!-- replace with hero image -->
      <source srcset={welcome} type="image/webp" />
      <img src={welcome_fallback} alt="Welcome" />
    </picture>
  </div>
  <div class="content">
    {#each data.titles as titleObj}
      <ContentCard title={titleObj.name} />
    {/each}
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0.6;
  }

  h1 {
    width: 100%;
  }

  .hero-banner {
    display: block;
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 2048) 0;
  }

  .hero-banner img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  }
</style>
