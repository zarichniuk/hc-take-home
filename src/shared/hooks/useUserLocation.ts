import { useEffect, useMemo, useState } from 'react';
import { type Location } from '../types.ts';

type UseUserLocation =
  | {
      location: null;
      error: null;
      isLoading: true;
    }
  | {
      location: Location;
      error: null;
      isLoading: false;
    }
  | {
      location: null;
      error: string;
      isLoading: false;
    };

export function useUserLocation(): UseUserLocation {
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      setIsLoading(false);
      return;
    }

    function getLocation() {
      return new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    }

    getLocation()
      .then((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setIsLoading(false);
      })
      .catch((err) => {
        setError(`Error: ${err.message}`);
        setIsLoading(false);
      });
  }, []);

  return <UseUserLocation>(
    useMemo(() => ({ location, error, isLoading }), [location, error])
  );
}
