export interface Location {
  latitude: number;
  longitude: number;
}

type Value = [value: number, unit: string];
export interface CurrentWeather {
  temperature: Value | null;
  weatherCode: number | null;
  windSpeed: Value | null;
  relativeHumidity: Value | null;
}
export interface Forecast {
  date: string;
  minTemperature: Value;
  maxTemperature: Value;
  weatherCode: number;
}
