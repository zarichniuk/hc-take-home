import { Suspense } from 'react';
import { ErrorBoundary } from '../shared/components/ErrorBoundary/ErrorBoundary.tsx';
import { CurrentWeather } from './components/CurrentWeather/CurrentWeather.tsx';

export function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <CurrentWeather />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
