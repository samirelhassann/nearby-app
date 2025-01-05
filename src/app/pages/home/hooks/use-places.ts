import { Place } from "@/domains/place";
import getPlacesUseCase from "@/useCases/get-places";
import { useQuery } from "@tanstack/react-query";

import { useCategoriesContext } from "../providers/category-provider";

interface usePlacesOutputProps {
  places: Place[];
  isLoading: boolean;
  isError: boolean;
}

export function usePlaces(): usePlacesOutputProps {
  const { selectedCategory } = useCategoriesContext();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["places", selectedCategory],
    queryFn: () =>
      getPlacesUseCase({
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        categoryId: selectedCategory!.id,
      }),
    enabled: !!selectedCategory,
  });

  const places = data ?? [];

  return {
    places,
    isLoading,
    isError,
  };
}
