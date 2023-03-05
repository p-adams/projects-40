<script lang="ts">
  import geo from "./assets/geo.jpg";
</script>

<main>
  <div class="banner">
    <img src={geo} class="banner-image" alt="Banner" />
  </div>

  <h1>الستين مسألة</h1>
  <h2>Sixty Issues</h2>
  <h3>Imam Ahmad bin Muhammad bin Sulaiman al-Zahid al-Misri (d. 819 ah)</h3>

  <div class="card">
    <button>Read</button>
  </div>
</main>

<style>
  .banner {
    height: 125px;
    position: relative;
  }
  .banner-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
</style>
