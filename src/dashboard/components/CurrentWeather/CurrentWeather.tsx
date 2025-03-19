import { useWeatherResponse } from '../../../shared/hooks/useWeatherResponse.ts';
import { useUserLocation } from '../../../shared/hooks/useUserLocation.ts';
import { WeatherCondition } from '../../../shared/components/WeatherCondition/WeatherCondition.tsx';

export function CurrentWeather() {
  const { data: location } = useUserLocation();
  const {
    data: {
      current: { temperature, weatherCode, windSpeed, relativeHumidity },
    },
  } = useWeatherResponse({
    location,
  });

  return (
    <>
      <h2>Current weather</h2>
      <dl>
        {temperature && (
          <>
            <dt>Temperature:</dt>
            <dd>
              {temperature[0]} {temperature[1]}
            </dd>
          </>
        )}
        {weatherCode && (
          <>
            <dt>Weather condition:</dt>
            <dd>
              <WeatherCondition weatherCode={weatherCode} />
            </dd>
          </>
        )}
        {windSpeed && (
          <>
            <dt>Wind speed:</dt>
            <dd>
              {windSpeed[0]} {windSpeed[1]}
            </dd>
          </>
        )}
        {relativeHumidity && (
          <>
            <dt>Relative humidity:</dt>
            <dd>
              {relativeHumidity[0]} {relativeHumidity[1]}
            </dd>
          </>
        )}
      </dl>
    </>
  );
}
