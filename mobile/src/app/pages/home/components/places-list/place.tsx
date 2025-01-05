import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
} from "react-native";

import { Ticket } from "lucide-react-native";

import Skeleton from "@/app/components/skeleton";
import { colors } from "@/styles/theme";

interface PlaceProps extends TouchableOpacityProps {
  name: string;
  image: string;
  description: string;
  coupons: number;
}

export default function Place({
  name,
  image,
  description,
  coupons,
  ...rest
}: PlaceProps) {
  const formattedCouponsText =
    coupons === 1 ? "1 cupom disponível" : `${coupons} cupons disponíveis`;

  return (
    <TouchableOpacity
      className="flex flex-row gap-4 p-2 mb-3 bg-gray-100 border border-gray-200 rounded-xl"
      {...rest}
    >
      <Image className="rounded-lg size-32" src={image} />
      <View className="flex flex-col justify-between flex-1 py-2">
        <View>
          <Text className="text-lg font-semibold text-gray-600">{name}</Text>

          <Text
            className="mt-2 text-sm leading-4 text-gray-500"
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {description}
          </Text>
        </View>

        <View className="flex flex-row items-center gap-2">
          <Ticket color={colors.red.base} size={20} />
          <Text className="text-gray-400">{formattedCouponsText}</Text>
        </View>

        <View className="flex flex-row items-center gap-2" />
      </View>
    </TouchableOpacity>
  );
}

function Loading() {
  return (
    <TouchableOpacity className="flex flex-row gap-4 p-2 mb-3 bg-gray-100 border border-gray-200 rounded-xl">
      <Skeleton className="rounded-lg size-32" />
      <View className="flex flex-col justify-between flex-1 py-2">
        <Skeleton className="w-2/3 h-4" />

        <View className="flex-col gap-1">
          <Skeleton className="w-4/5 h-3" />
          <Skeleton className="w-full h-3" />
        </View>

        <View className="flex flex-row items-center gap-2">
          <Skeleton className="w-8 h-5" />
          <Skeleton className="w-1/2 h-5" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

Place.Loading = Loading;
