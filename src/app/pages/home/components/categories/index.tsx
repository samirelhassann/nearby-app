import { Suspense } from "react";
import { FlatList, View } from "react-native";

import CategoryButton from "./category-button";
import { useCategories } from "./hooks/use-categories";

function Component() {
  const { formattedCategories, onClickCategory } = useCategories();

  return (
    <View className="absolute top-0 left-0 right-0 z-10">
      <FlatList
        data={formattedCategories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryButton
            name={item.name}
            isSelected={item.selected}
            onPress={() => onClickCategory(item)}
          />
        )}
        className="pt-16 pl-5"
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

function Loading() {
  const loadingData = Array.from({ length: 5 }, (_, index) => ({
    id: index.toString(),
  }));

  return (
    <View className="absolute top-0 left-0 right-0 z-10">
      <FlatList
        data={loadingData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CategoryButton.Loading key={item.id} />}
        className="pt-16 pl-5"
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default function Categories() {
  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  );
}
