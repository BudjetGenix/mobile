import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

const useLocation = () => {
  const [loc, setLoc] = useState<{ longitude?: number; latitude?: number }>();

  const getPerms = async () => {
    try {
      const result = await Location.requestForegroundPermissionsAsync();
      if (!result.granted) return;
      const pos = await Location.getLastKnownPositionAsync();
      setLoc({
        longitude: pos?.coords.longitude,
        latitude: pos?.coords.latitude,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPerms();
  }, []);

  return loc;
};

export default useLocation;
