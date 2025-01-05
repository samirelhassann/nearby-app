import { View, ViewProps } from "react-native";

import { twMerge } from "tailwind-merge";

interface SkeletonProps extends ViewProps {
  className?: string;
}

export default function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <View
      className={twMerge("animate-pulse rounded-lg bg-zinc-200", className)}
      {...props}
    />
  );
}
