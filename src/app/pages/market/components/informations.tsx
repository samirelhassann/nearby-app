import { View, Text } from "react-native";

import { MapPin, Phone } from "lucide-react-native";

import { colors } from "@/styles/theme";

interface InformationsProps {
  address?: string;
  phone?: string;
}

export default function Informations({ address, phone }: InformationsProps) {
  return (
    <View className="flex flex-col gap-3">
      <Text className="font-semibold text-gray-600">Informações</Text>
      <View className="flex flex-row items-center gap-2 text-gray-500">
        <MapPin size={16} color={colors.gray[400]} />
        <Text className="text-gray-500">{address}</Text>
      </View>
      <View className="flex flex-row items-center gap-2 text-gray-500">
        <Phone size={16} color={colors.gray[400]} />
        <Text className="text-gray-500">{phone}</Text>
      </View>
    </View>
  );
}
