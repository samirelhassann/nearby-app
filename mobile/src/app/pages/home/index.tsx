import { View } from "react-native";

import { CategoriesProvider } from "@/app/pages/home/providers/category-provider";

import Categories from "./components/categories";
import Map from "./components/map";
import PlacesList from "./components/places-list";

export default function HomePage() {
  return (
    <CategoriesProvider>
      <View className="flex flex-1 bg-zinc-200">
        <Categories />

        <Map />
        <PlacesList />
      </View>
    </CategoriesProvider>
  );
}
