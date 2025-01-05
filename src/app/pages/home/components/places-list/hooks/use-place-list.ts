import { useRef } from "react";
import { useWindowDimensions } from "react-native";

import { router } from "expo-router";

import { Place } from "@/domains/place";
import BottomSheet from "@gorhom/bottom-sheet";

import { usePlaces } from "../../../hooks/use-places";

interface SnapPoints {
  min: number;
  max: number;
}

interface usePlaceListOutputProps {
  places: Place[];
  snapPoints: SnapPoints;
  bottomSheetRef: React.RefObject<BottomSheet>;
  isSearchingPlaces: boolean;
  onPressPlace: (placeId: string) => void;
}

export function usePlaceList(): usePlaceListOutputProps {
  const { places, isLoading: isSearchingPlaces } = usePlaces();
  const dimensions = useWindowDimensions();

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints: SnapPoints = {
    min: 278,
    max: dimensions.height - 128,
  };

  const onPressPlace = (placeId: string) => {
    router.navigate(`/pages/market/${placeId}`);
  };

  return {
    places,
    isSearchingPlaces,
    snapPoints,
    bottomSheetRef,
    onPressPlace,
  };
}
