import { BrowserRouter, Route, Routes } from 'react-router';
import { Dashboard } from './dashboard/Dashboard.tsx';
import { WeatherDetails } from './weather-details/WeatherDetails.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/weather-details" element={<WeatherDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
