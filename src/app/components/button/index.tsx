import React from "react";
import {
  ActivityIndicator,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { LucideProps } from "lucide-react-native";
import { tv } from "tailwind-variants";

import { colors } from "@/styles/theme";

interface ButtonProps extends TouchableOpacityProps {
  variant?: "primary" | "button";
  isLoading?: boolean;
}

const rootVariants = tv({
  base: "flex items-center justify-center rounded-xl flex-row disabled:opacity-70 gap-2",
  variants: {
    variant: {
      primary: "h-[56px] bg-green-base",
      button: "flex items-center p-[10px] bg-green-base",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

function Root({
  children,
  variant,
  className,
  isLoading = false,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={rootVariants({ variant, className })}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.gray[100]} />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

function Title({ children, className, ...props }: TextProps) {
  return (
    <Text className={`font-semibold text-gray-100 ${className}`} {...props}>
      {children}
    </Text>
  );
}

interface IconProps extends LucideProps {
  icon: React.ComponentType<LucideProps>;
}

// eslint-disable-next-line @typescript-eslint/no-shadow
function Icon({ icon: Icon, ...rest }: IconProps) {
  return <Icon size={24} color={colors.gray[100]} {...rest} />;
}

export const Button = {
  Root,
  Title,
  Icon,
};
