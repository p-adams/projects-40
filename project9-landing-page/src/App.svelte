<script lang="ts">
  import geo from "./assets/geo.jpg";
</script>

<main>
  <div class="banner">
    <img src={geo} class="banner-image" alt="Banner" />
  </div>
  <h1 class="title">Sixty Issues</h1>

  <div class="card" />
</main>

<style>
  .banner {
    height: 100px;
    position: relative;
  }
  .banner-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
</style>
