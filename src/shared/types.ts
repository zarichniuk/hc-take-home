export interface Location {
  latitude: number;
  longitude: number;
}

type Value = [value: number, unit: string];
export interface CurrentWeather {
  temperature: Value;
  weatherCode: number;
}
export interface CurrentWeatherDetailed extends CurrentWeather {
  windSpeed: Value;
  relativeHumidity: Value;
}
export function isCurrentWeatherDetailed(
  weather: CurrentWeather | CurrentWeatherDetailed,
): weather is CurrentWeatherDetailed {
  return 'windSpeed' in weather;
}

export interface Forecast {
  date: string;
  minTemperature: Value;
  maxTemperature: Value;
  weatherCode: number;
}
