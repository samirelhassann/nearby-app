import { View, Image } from "react-native";

import BackButton from "./back-button";

interface HeaderProps {
  cover: string;
}

export default function Header({ cover }: HeaderProps) {
  return (
    <View className="h-1/3">
      <Image
        className="w-full h-full"
        source={{
          uri: cover,
        }}
        resizeMode="cover"
      />

      <BackButton />
    </View>
  );
}
