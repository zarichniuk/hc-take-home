import { useCurrentWeather } from '../../../shared/hooks/useCurrentWeather.ts';
import { WeatherCondition } from '../../../shared/components/WeatherCondition/WeatherCondition.tsx';
import { isCurrentWeatherDetailed } from '../../../shared/types.ts';

export function CurrentWeather() {
  const { data } = useCurrentWeather();

  return (
    <>
      <h2>Current weather</h2>
      <dl>
        <dt>Temperature:</dt>
        <dd>
          {data.temperature[0]} {data.temperature[1]}
        </dd>
        <dt>Weather condition:</dt>
        <dd>
          <WeatherCondition weatherCode={data.weatherCode} />
        </dd>
        {isCurrentWeatherDetailed(data) && (
          <>
            <dt>Wind speed:</dt>
            <dd>
              {data.windSpeed[0]} {data.windSpeed[1]}
            </dd>
            <dt>Relative humidity:</dt>
            <dd>
              {data.relativeHumidity[0]} {data.relativeHumidity[1]}
            </dd>
          </>
        )}
      </dl>
    </>
  );
}
