export interface Location {
  latitude: number;
  longitude: number;
}

type Value = [value: number, unit: string];
export interface WeatherData {
  current: {
    temperature: Value | null;
    weatherCode: number | null;
    windSpeed: Value | null;
    relativeHumidity: Value | null;
  };
}
