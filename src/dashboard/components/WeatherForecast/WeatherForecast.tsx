import { WeatherCondition } from '../../../shared/components/WeatherCondition/WeatherCondition.tsx';
import { useForecast } from '../../../shared/hooks/useForecast.ts';
import classes from './WeatherForecast.module.css';

export function WeatherForecast() {
  const { data } = useForecast();

  return (
    <>
      <h2>Weather forecast</h2>
      <ul className={classes.list}>
        {data.map(({ date, minTemperature, maxTemperature, weatherCode }) => (
          <li key={date}>
            <dl>
              <dt>Date:</dt>
              <dd>{date}</dd>
              <dt>Temperature:</dt>
              <dd>
                {minTemperature[0]} {minTemperature[1]} - {maxTemperature[0]}{' '}
                {maxTemperature[1]}
              </dd>
              <dt>Weather condition:</dt>
              <dd>
                <WeatherCondition weatherCode={weatherCode} />
              </dd>
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
}
