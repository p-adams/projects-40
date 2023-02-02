import type { ForecastItem } from "./datatypes";

export function getForecast(hourlyData): Array<ForecastItem> {
  const daysForecast: Array<ForecastItem> = [];
  for (let i = 0; i < hourlyData?.length; i += 24) {
    const hourlyTemperatures = hourlyData.slice(i, i + 24);
    const min = Math.min(...hourlyTemperatures.map((t) => t.temperature));
    const max = Math.max(...hourlyTemperatures.map((t) => t.temperature));
    daysForecast.push({
      data: hourlyData[i],
      temperatures: hourlyData.slice(i, i + 24),
      lo: min,
      high: max,
    });
  }

  return daysForecast;
}

export async function fetchJsonData(path: string): Promise<any> {
  return fetch(path).then((res) => res.json());
}
