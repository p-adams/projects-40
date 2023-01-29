<script lang="ts">
  import { onMount } from "svelte";

  const API_BASE_URL = (
    params = { latitude: 37.55, longitude: -121.99, hourly: "temperature_2m" }
  ) =>
    `https://api.open-meteo.com/v1/forecast?latitude=${params.latitude}&longitude=${params.longitude}&hourly=${params.hourly}`;
  onMount(async () => {
    try {
      const response = await fetch(API_BASE_URL()).then((res) => res.json());
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  });
</script>

<main>
  <h1>Weather</h1>

  <div class="card" />
</main>

<style>
</style>
