import { View, Text } from "react-native";

import { PlaceRule } from "@/domains/place";

interface RulesProps {
  rules: PlaceRule[];
}

export default function Rules({ rules }: RulesProps) {
  return (
    <View className="flex flex-col gap-3 mt-8">
      <Text className="font-semibold text-gray-600">Regulamento</Text>
      {rules.map((rule) => (
        <View
          key={rule.id}
          className="flex flex-row items-center text-gray-500"
        >
          <Text className="px-3 text-gray-500">•</Text>
          <Text className="text-gray-500">{rule.description}</Text>
        </View>
      ))}
    </View>
  );
}
