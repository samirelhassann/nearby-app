/* eslint-disable global-require */
import { Image, Text, View } from "react-native";

import LogoIcon from "@/assets/logo.png";

export default function HeaderInfo() {
  return (
    <View className="flex flex-col">
      <Image source={LogoIcon} className="size-12" />

      <Text className="mt-[28px] font-bold text-2xl text-gray-600 ">
        Boas vindas ao Nearby!
      </Text>

      <Text className="mt-3 leading-6 text-gray-500">
        Tenha cupons de vantagem para usar em seus estabelecimentos favoritos.
      </Text>
    </View>
  );
}
