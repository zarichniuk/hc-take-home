import { BrowserRouter, Route, Routes } from 'react-router';
import { Dashboard } from './dashboard/Dashboard.tsx';
import { WeatherDetails } from './weather-details/WeatherDetails.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/weather-details" element={<WeatherDetails />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
