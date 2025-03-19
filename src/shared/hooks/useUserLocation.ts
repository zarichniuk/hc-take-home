import { useSuspenseQuery } from '@tanstack/react-query';
import { type Location } from '../types.ts';

export function useUserLocation() {
  return useSuspenseQuery({
    queryKey: ['location'],
    queryFn: async () => {
      if (!navigator.geolocation) {
        throw new Error('Geolocation is not supported by your browser');
      }
      return new Promise<Location>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        }, reject);
      });
    },
  });
}
