import { View, Text } from "react-native";

import { Ticket } from "lucide-react-native";

import { colors } from "@/styles/theme";

export default function UsedCoupons() {
  return (
    <View className="flex flex-col gap-3">
      <Text className="font-semibold text-gray-600">Cupons usados</Text>
      {Array.from({ length: 2 }).map((_, index) => (
        <View
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className="flex flex-row items-center gap-2 text-gray-500"
        >
          <Ticket size={16} color={colors.green.base} />
          <Text className="text-gray-500">26/09/24 às 21:32</Text>
        </View>
      ))}
    </View>
  );
}
