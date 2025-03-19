import { useSuspenseQuery } from '@tanstack/react-query';
import { type CurrentWeather, type CurrentWeatherDetailed } from '../types.ts';
import { useUserLocation } from './useUserLocation.ts';

interface WeatherResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
    weather_code: string;
    wind_speed_10m: string;
    relative_humidity_2m: string;
  };
  current: {
    time: number;
    interval: number;
    temperature_2m: number;
    weather_code: number;
    wind_speed_10m: number;
    relative_humidity_2m: number;
  };
}

function mapWeatherResponse(
  isDetailed: boolean,
  { current, current_units }: WeatherResponse,
): CurrentWeather | CurrentWeatherDetailed {
  const result: CurrentWeather = {
    temperature: [current.temperature_2m, current_units.temperature_2m],
    weatherCode: current.weather_code,
  };
  if (!isDetailed) {
    return result;
  }

  return {
    ...result,
    windSpeed: [current.wind_speed_10m, current_units.wind_speed_10m],
    relativeHumidity: [
      current.relative_humidity_2m,
      current_units.relative_humidity_2m,
    ],
  } as CurrentWeatherDetailed;
}

export function useCurrentWeather(isDetailed: boolean = false) {
  const { data: location } = useUserLocation();

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,weather_code${isDetailed ? ',wind_speed_10m,relative_humidity_2m' : ''}&format=json&timeformat=unixtime`;

  return useSuspenseQuery({
    queryKey: [url],
    queryFn: async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = (await response.json()) as WeatherResponse;
      return mapWeatherResponse(isDetailed, responseData);
    },
  });
}
