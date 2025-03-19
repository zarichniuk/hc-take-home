const weatherConditionLabels = new Map<number, string>([
  [0, 'Clear sky'],

  [1, 'Mainly clear'],
  [2, 'Partly cloudy'],
  [3, 'Overcast'],

  [45, 'Fog'],
  [48, 'Depositing rime fog'],

  [51, 'Light drizzle'],
  [53, 'Moderate drizzle'],
  [55, 'Dense drizzle'],

  [56, 'Light freezing drizzle'],
  [57, 'Dense freezing drizzle'],

  [61, 'Slight rain'],
  [63, 'Moderate rain'],
  [65, 'Heavy rain'],

  [66, 'Light freezing rain'],
  [67, 'Heavy freezing rain'],

  [71, 'Slight snow fall'],
  [73, 'Moderate snow fall'],
  [75, 'Heavy snow fall'],

  [77, 'Snow grains'],

  [80, 'Slight rain showers'],
  [81, 'Moderate rain showers'],
  [82, 'Violent rain showers'],

  [85, 'Slight snow showers'],
  [86, 'Heavy snow showers'],

  [95, 'Thunderstorm'],

  [96, 'Thunderstorm with slight hail'],
  [99, 'Thunderstorm with heavy hail'],
]);

function getWeatherConditionIcon(weatherCode: number) {
  switch (weatherCode) {
    case 0:
      return '☀️';
    case 1:
      return '🌤️️';
    case 2:
      return '⛅️';
    case 3:
      return '☁️️';
    case 45:
    case 48:
      return '🌫';
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      return '🌧️';
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return '❄️️';
    case 95:
    case 96:
    case 99:
      return '⛈️';
    default:
      return;
  }
}

export function WeatherCondition({
  weatherCode,
}: Readonly<{ weatherCode: number }>) {
  return (
    <>
      {getWeatherConditionIcon(weatherCode)}{' '}
      {weatherConditionLabels.get(weatherCode)}
    </>
  );
}
