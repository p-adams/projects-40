<script lang="ts">
  import { onMount } from "svelte";

  const WEATHER_API_BASE_URL = (params: Lib.BaseUrlParams) =>
    `https://api.open-meteo.com/v1/forecast?latitude=${params.latitude}&longitude=${params.longitude}&hourly=${params.hourly}&current_weather=true&temperature_unit=${params.temperature_unit}`;

  $: weatherData = null as Lib.WeatherApiResponse;

  async function fetchJsonData(path: string): Promise<any> {
    return fetch(path).then((res) => res.json());
  }

  onMount(async () => {
    try {
      const query = "Addis Ababa, Ethiopia";

      const geo = await fetchJsonData(
        `https://geocode.search.hereapi.com/v1/geocode?q=${query}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const { position } = geo.items[0];
      weatherData = await fetchJsonData(
        WEATHER_API_BASE_URL({
          latitude: position.lat,
          longitude: position.lng,
          hourly: Lib.Hourly.temperature_2m,
          temperature_unit: "fahrenheit",
        })
      );
    } catch (error) {
      console.log(error);
    }
  });
</script>

<main>
  <h1>Weather</h1>

  <div class="card">
    <h3>Current Weather</h3>
    {#if !weatherData}
      Loading weather data
    {:else}
      <div>
        <div>{weatherData?.current_weather?.temperature} °F</div>
      </div>
    {/if}
  </div>
</main>

<style>
</style>
