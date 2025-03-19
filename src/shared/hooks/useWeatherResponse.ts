import { useSuspenseQuery } from '@tanstack/react-query';
import { type Location, type WeatherData } from '../types.ts';

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

function mapWeatherResponse({
  current,
  current_units,
}: WeatherResponse): WeatherData {
  return {
    current: {
      temperature: [current.temperature_2m, current_units.temperature_2m],
      weatherCode: current.weather_code,
      windSpeed: [current.wind_speed_10m, current_units.wind_speed_10m],
      relativeHumidity: [
        current.relative_humidity_2m,
        current_units.relative_humidity_2m,
      ],
    },
  };
}

export function useWeatherResponse({
  location,
  temperature = true,
  weatherCode = true,
  windSpeed = false,
  humidity = false,
}: Readonly<{
  location: Location;
  temperature?: boolean;
  weatherCode?: boolean;
  windSpeed?: boolean;
  humidity?: boolean;
}>) {
  const params = [
    temperature && 'temperature_2m',
    weatherCode && 'weather_code',
    windSpeed && 'wind_speed_10m',
    humidity && 'relative_humidity_2m',
  ].filter((param) => param);
  const paramsString = params.length ? `&current=${params.join(',')}` : '';

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}${paramsString}&format=json&timeformat=unixtime`;

  return useSuspenseQuery({
    queryKey: [url],
    queryFn: async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = (await response.json()) as WeatherResponse;
      return mapWeatherResponse(responseData);
    },
  });
}
