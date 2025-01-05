import { Text, View } from "react-native";

import { colors } from "@/styles/theme";

import useSteps from "./hooks/use-steps";

export default function Steps() {
  const { stepInfos } = useSteps();

  return (
    <View className="flex flex-col gap-6">
      <Text className="leading-6 text-gray-500">Veja como Funciona:</Text>

      <View className="flex flex-col gap-[1.75rem]">
        {stepInfos.map(({ description, Icon, title }) => (
          <View className="flex flex-row gap-4" key={title}>
            <Icon className="size-10" color={colors.red.base} />

            <View className="flex flex-col gap-1">
              <Text className="font-semibold text-gray-600">{title}</Text>

              <Text className="text-xs leading-5 text-gray-500">
                {description}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
