import { Text, View } from "react-native";

import Skeleton from "@/app/components/skeleton";
import { colors } from "@/styles/theme";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

import { usePlaceList } from "./hooks/use-place-list";
import Place from "./place";

export default function PlacesList() {
  const {
    places,
    bottomSheetRef,
    snapPoints,
    onPressPlace,
    isSearchingPlaces,
  } = usePlaceList();

  return (
    <BottomSheet
      ref={bottomSheetRef}
      handleIndicatorStyle={{
        backgroundColor: colors.gray[300],
        width: 100,
        height: 5,
        borderRadius: 3,
      }}
      snapPoints={[snapPoints.min, snapPoints.max]}
      enableOverDrag={false}
    >
      <View className="flex flex-col gap-4 px-6 pt-5 bg-gray-100 ">
        {isSearchingPlaces ? (
          <Skeleton className="w-1/2 h-7" />
        ) : (
          <View className="flex flex-row items-center gap-2">
            <Text className="text-lg leading-6 text-gray-600">
              Explore Locais perto de você
            </Text>
          </View>
        )}

        {isSearchingPlaces ? (
          <BottomSheetFlatList
            data={Array.from({ length: 5 }).map((_, index) => {
              return {
                id: index.toString(),
              };
            })}
            keyExtractor={(item) => item.id}
            renderItem={() => <Place.Loading />}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <BottomSheetFlatList
            data={places}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Place
                coupons={item.coupons}
                description={item.description}
                name={item.name}
                image={item.cover}
                onPress={() => onPressPlace(item.id)}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </BottomSheet>
  );
}
