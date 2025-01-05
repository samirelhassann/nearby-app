/* eslint-disable camelcase */
import { Stack } from "expo-router";

import "../styles/global.css";
import CustomQueryClientProvider from "@/providers/query-client-provider";
import { colors } from "@/styles/theme";

// eslint-disable-next-line import-helpers/order-imports
import { GestureHandlerRootView } from "react-native-gesture-handler";

import {
  useFonts,
  Rubik_600SemiBold,
  Rubik_700Bold,
  Rubik_400Regular,
  Rubik_500Medium,
} from "@expo-google-fonts/rubik";

import Loading from "./components/loading";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Rubik_600SemiBold,
    Rubik_700Bold,
    Rubik_400Regular,
    Rubik_500Medium,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <CustomQueryClientProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: colors.gray[100],
            },
          }}
        />
      </GestureHandlerRootView>
    </CustomQueryClientProvider>
  );
}
