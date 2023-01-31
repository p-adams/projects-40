<script lang="ts">
  import { onMount } from "svelte";
  interface ApiResponse {
    current_weather: {
      temperature: number;
      windspeed: number;
      winddirection: number;
    };

    elevation: number;
    generationtime_ms: number;
    hourly: { time: Array<string>; temperature_2m: Array<number> };
    hourly_units: { time: string; temperature_2m: string };
    latitude: number;
    longitude: number;
    timezone: string;
    timezone_abbreviation: string;
    utc_offset_seconds: number;
    temperature_unit?: string;
  }

  enum Hourly {
    temperature_2m = "temperature_2m",
  }

  type HourlyParameter = {
    hourly?: Hourly;
  };

  type BaseUrlParams = Pick<
    ApiResponse,
    "latitude" | "longitude" | "temperature_unit"
  > &
    HourlyParameter;
  const API_BASE_URL = (params: BaseUrlParams) =>
    `https://api.open-meteo.com/v1/forecast?latitude=${params.latitude}&longitude=${params.longitude}&hourly=${params.hourly}&current_weather=true&temperature_unit=${params.temperature_unit}`;

  $: weatherData = null as ApiResponse;
  onMount(async () => {
    try {
      const query = "Addis Ababa, Ethiopia";
      const geo = await fetch(
        `https://geocode.search.hereapi.com/v1/geocode?q=${query}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      ).then((res) => res.json());
      const { position } = geo.items[0];
      const response: ApiResponse = await fetch(
        API_BASE_URL({
          latitude: position.lat,
          longitude: position.lng,
          hourly: Hourly.temperature_2m,
          temperature_unit: "fahrenheit",
        })
      ).then((res) => res.json());

      weatherData = response;
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
