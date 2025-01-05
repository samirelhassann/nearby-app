import { useRef } from "react";
import MapView from "react-native-maps";

import * as Location from "expo-location";

import { Place } from "@/domains/place";

import { usePlaces } from "../../../hooks/use-places";

interface UseMapOutputProps {
  currentLocation: {
    latitude: number;
    longitude: number;
  };
  places: Place[];
  mapRef: React.RefObject<MapView>;
  goToMyLocation: () => void;
}

const currentLocation = {
  latitude: -23.561187293883442,
  longitude: -46.656451388116494,
};

export function useMap(): UseMapOutputProps {
  const { places } = usePlaces();
  const mapRef = useRef<MapView>(null);

  // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
  const getCurrentPosition = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return;
    }

    // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
    const location = await Location.getCurrentPositionAsync();
  };

  const goToMyLocation = () => {
    mapRef.current?.animateToRegion({
      latitude: currentLocation.latitude,
      longitude: currentLocation.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };

  return {
    currentLocation,
    places,
    mapRef,
    goToMyLocation,
  };
}
