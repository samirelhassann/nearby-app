import React from "react";
import { Text, View, ScrollView } from "react-native";

import { Ticket } from "lucide-react-native";

import Loading from "@/app/components/loading";
import { colors } from "@/styles/theme";

import ActionButtons from "./components/action-buttons";
import Header from "./components/header";
import Informations from "./components/informations";
import Rules from "./components/rules";

import { useMarket } from "./hooks/use-market";

export default function Market() {
  const { place, isLoading } = useMarket();

  if (isLoading || !place) {
    return <Loading />;
  }

  const { cover, name, description, coupons, phone, rules, address } = place;

  return (
    <View className="flex-1 bg-gray-200">
      <Header cover={cover} />

      <View className="z-10 flex-1 -mt-10 bg-white rounded-t-3xl">
        <View className="p-8 bg-white rounded-t-3xl">
          <Text className="text-lg font-bold text-gray-600">{name}</Text>
        </View>

        <ScrollView className="flex-1 px-8 pt-0" showsVerticalScrollIndicator>
          <View className="flex flex-col gap-3">
            <Text className="leading-6 text-gray-500">{description}</Text>

            <View className="flex flex-row items-center w-full gap-3 px-4 py-3 rounded-lg bg-red-light">
              <Ticket size={24} color={colors.red.base} />
              <View className="flex flex-row gap-1">
                <Text className="font-semibold">{coupons}</Text>
                <Text>cupons disponíveis</Text>
              </View>
            </View>

            {rules && (
              <>
                <Rules rules={rules} />
                <View className="w-full h-[1px] my-4 bg-gray-200" />
              </>
            )}

            <Informations address={address} phone={phone} />

            {/* <View className="w-full h-[1px] my-4 bg-gray-200" /> */}
            {/* <UsedCoupons /> */}
          </View>
        </ScrollView>

        <ActionButtons />
      </View>
    </View>
  );
}
