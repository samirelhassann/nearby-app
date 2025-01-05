import { Pressable, PressableProps, Text } from "react-native";

import { twMerge } from "tailwind-merge";

import Skeleton from "@/app/components/skeleton";

interface CategoryButtonProps extends PressableProps {
  name: string;
  isSelected?: boolean;
}

export default function CategoryButton({
  name,
  isSelected,
  ...rest
}: CategoryButtonProps) {
  return (
    <Pressable
      className={twMerge(
        "group border-[1px] border-gray-300 rounded-lg flex items-center justify-center h-10 ml-4 px-5 bg-gray-100",
        isSelected && "bg-green-base border-green-base",
      )}
      {...rest}
    >
      <Text className={twMerge("text-gray-500 ", isSelected && "text-white")}>
        {name}
      </Text>
    </Pressable>
  );
}

function Loading() {
  return <Skeleton className="w-32 h-10 ml-4" />;
}

CategoryButton.Loading = Loading;
