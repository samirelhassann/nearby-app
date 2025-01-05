import React from "react";
import { View } from "react-native";

import { router } from "expo-router";

import { Button } from "@/app/components/button";

import HeaderInfo from "./components/header-info";
import Steps from "./components/steps/steps";

export default function WelcomePage() {
  return (
    <View className="flex flex-col justify-between h-full px-10 pt-20 pb-12">
      <View className="flex flex-col justify-between gap-10">
        <HeaderInfo />
        <Steps />
      </View>

      <Button.Root onPress={() => router.navigate("/pages/home")}>
        <Button.Title>Começar</Button.Title>
      </Button.Root>
    </View>
  );
}
