<script lang="ts">
  import { onMount } from "svelte";
  import type {
    BaseUrlParams,
    ForecastItem,
    GeocodeApiResponse,
    WeatherApiResponse,
  } from "./datatypes";
  import { Hourly } from "./datatypes";
  import { fetchJsonData, getForecast } from "./utils";

  const WEATHER_API_BASE_URL = (params: BaseUrlParams) =>
    `https://api.open-meteo.com/v1/forecast?latitude=${params.latitude}&longitude=${params.longitude}&hourly=${params.hourly}&current_weather=true&temperature_unit=${params.temperature_unit}`;

  $: weatherData = null as WeatherApiResponse;
  $: geoData = null as GeocodeApiResponse;
  $: forecast = null as Array<ForecastItem>;

  onMount(async () => {
    try {
      const query = "Detroit, MI";

      geoData = await fetchJsonData(
        `https://geocode.search.hereapi.com/v1/geocode?q=${query}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      );

      const { position } = geoData.items[0];
      weatherData = await fetchJsonData(
        WEATHER_API_BASE_URL({
          latitude: position.lat,
          longitude: position.lng,
          hourly: Hourly.temperature_2m,
          temperature_unit: "fahrenheit",
        })
      );
      const hourlyData = weatherData?.hourly?.time.map((time, index) => ({
        time,
        temperature: weatherData?.hourly?.temperature_2m[index],
      }));

      forecast = getForecast(hourlyData);
    } catch (error) {
      console.log(error);
    }
  });
  $: temperatureScale = weatherData?.hourly_units?.temperature_2m;
  $: today = new Date().toDateString();
</script>

<main>
  <h1>Weather</h1>

  <div class="Weather-card">
    {#if !weatherData}
      Loading weather data
    {:else}
      <section class="Section-content">
        <h2>Weather in {geoData.items[0].address.label}</h2>
        <div class="Card">
          <h3>Today {today}</h3>

          <div>
            {weatherData?.current_weather?.temperature}
            {temperatureScale}
          </div>
        </div>

        <div class="Forecast">
          {#each forecast as forecastItem}
            <div class="Card">
              <h3>{new Date(forecastItem.data.time).toDateString()}</h3>
              <div>
                {forecastItem.high}/{forecastItem.lo}
              </div>
            </div>
          {/each}
        </div>
      </section>
    {/if}
  </div>
</main>

<style>
  .Section-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .Forecast {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }
  .Card {
    outline: 1px solid lightgray;
    height: 180px;
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    padding: 4px;
  }
</style>
