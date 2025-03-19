import { useSuspenseQuery } from '@tanstack/react-query';
import { type Forecast } from '../types.ts';
import { useUserLocation } from './useUserLocation.ts';

interface WeatherResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  daily_units: {
    time: string;
    weather_code: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
  };
  daily: {
    time: number[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
}

function mapWeatherResponse({
  daily_units,
  daily,
}: WeatherResponse): Forecast[] {
  return daily.time.map((time, index) => {
    return {
      date: new Date(time * 1000).toISOString().split('T')[0],
      minTemperature: [
        daily.temperature_2m_min[index],
        daily_units.temperature_2m_min,
      ],
      maxTemperature: [
        daily.temperature_2m_max[index],
        daily_units.temperature_2m_max,
      ],
      weatherCode: daily.weather_code[index],
    };
  });
}

export function useForecast() {
  const { data: location } = useUserLocation();

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=5&format=json&timeformat=unixtime`;

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
