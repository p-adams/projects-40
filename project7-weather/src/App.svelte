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
  }

  const API_BASE_URL = (
    params = {
      latitude: 37.55,
      longitude: -121.99,
      hourly: "temperature_2m",
      temperature_unit: "fahrenheit",
    }
  ) =>
    `https://api.open-meteo.com/v1/forecast?latitude=${params.latitude}&longitude=${params.longitude}&hourly=${params.hourly}&current_weather=true&temperature_unit=${params.temperature_unit}`;

  $: weatherData = null as ApiResponse;
  onMount(async () => {
    try {
      const response: ApiResponse = await fetch(API_BASE_URL()).then((res) =>
        res.json()
      );
      weatherData = response;
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  });
</script>

<main>
  <h1>Weather</h1>

  <div class="card">
    <h3>Current Weather</h3>
    <div>
      <div>{weatherData?.current_weather?.temperature}</div>
    </div>
  </div>
</main>

<style>
</style>
