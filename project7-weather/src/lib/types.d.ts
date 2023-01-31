namespace Lib {
  interface WeatherApiResponse {
    current_weather?: {
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
    Lib.WeatherApiResponse,
    "latitude" | "longitude" | "temperature_unit"
  > &
    HourlyParameter;
}
