import { useEffect, useState } from 'react';

const useGetCurrentLocation = () => {
  const [currentLocation, setCurrentLocation] = useState('');

  useEffect(() => {
    const success = (position) => {
      fetch(geoAPIURL)
        .then((res) => res.json())
        .then((data) => setCurrentLocation(data.city))
        .catch((err) => console.log(err));
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const geoAPIURL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

    };
    
    const error = () => {
      console.log('Unable to receive your location');
    };
    navigator.geolocation.getCurrentPosition(success, error);
    
  }, []);
  
  console.log(currentLocation)
  return { currentLocation };
};

export default useGetCurrentLocation;
