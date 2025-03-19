import { CurrentWeather } from './components/CurrentWeather/CurrentWeather.tsx';
import { Suspense } from 'react';

export function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <CurrentWeather />
      </Suspense>
    </>
  );
}
