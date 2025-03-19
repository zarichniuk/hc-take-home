import { useSuspenseQuery } from '@tanstack/react-query';
import { format, addDays, formatISO } from 'date-fns';
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
  utc_offset_seconds,
}: WeatherResponse): Forecast[] {
  return daily.time.map((time, index) => {
    return {
      date: formatISO(new Date(time * 1000 + utc_offset_seconds), {
        representation: 'date',
      }),
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
  const today = new Date();
  const startDate = format(addDays(today, 1), 'yyyy-MM-dd');
  const endDate = format(addDays(today, 5), 'yyyy-MM-dd');
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&start_date=${startDate}&end_date=${endDate}&format=json&timeformat=unixtime`;

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
