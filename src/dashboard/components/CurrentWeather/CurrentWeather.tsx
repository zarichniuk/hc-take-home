import { useWeatherResponse } from '../../../shared/hooks/useWeatherResponse.ts';
import { useUserLocation } from '../../../shared/hooks/useUserLocation.ts';

export function CurrentWeather() {
  const { data: location } = useUserLocation();
  const { data } = useWeatherResponse({
    location,
    humidity: true,
    windSpeed: true,
  });

  return (
    <>
      <h2>Current weather</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
