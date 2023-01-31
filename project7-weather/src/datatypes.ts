export interface GeocodeItem {
  title: string;
  id: string;
  resultType: string;
  administrativeAreaType: string;
  address: {
    label: string;
    countryCode: string;
    countryName: string;
    county: string;
    city?: string;
    postalCode?: string;
    state?: string;
    stateCode?: string;
  };
  position: {
    lat: number;
    lng: number;
  };
  localityType?: string;
  mapView: {
    west: number;
    south: number;
    east: number;
    north: number;
  };
  scoring: {
    queryScore: number;
    fieldScore: {
      country: number;
      county: number;
    };
  };
}

export interface GeocodeApiResponse {
  items: Array<GeocodeItem>;
}

export interface WeatherApiResponse {
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
export enum Hourly {
  temperature_2m = "temperature_2m",
}

type HourlyParameter = {
  hourly?: Hourly;
};

export type BaseUrlParams = Pick<
  WeatherApiResponse,
  "latitude" | "longitude" | "temperature_unit"
> &
  HourlyParameter;
