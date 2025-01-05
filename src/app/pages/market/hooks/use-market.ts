import { useLocalSearchParams } from "expo-router";

import { Place } from "@/domains/place";
import getPlaceUseCase from "@/useCases/get-place";
import { useQuery } from "@tanstack/react-query";

interface UseMarketOutputProps {
  place: Place | undefined;
  isLoading: boolean;
}

export function useMarket(): UseMarketOutputProps {
  const params = useLocalSearchParams<{
    id: string;
  }>();

  const placeId = params.id;

  const { data: place, isLoading } = useQuery({
    queryKey: ["place", placeId],
    queryFn: () =>
      getPlaceUseCase({
        placeId,
      }),
  });

  return { place, isLoading };
}
