/* eslint-disable global-require */
import React from "react";
import { Pressable, Text, View } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";

import { router } from "expo-router";
import { LocateFixed } from "lucide-react-native";

import { colors } from "@/styles/theme";

import { useMap } from "./hooks/use-map";

export default function Map() {
  const { currentLocation, places, mapRef, goToMyLocation } = useMap();

  return (
    <MapView
      style={{ flex: 1 }}
      ref={mapRef}
      region={{
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      zoomControlEnabled
      zoomEnabled
    >
      <View className="absolute top-32 right-5">
        <Pressable onPress={goToMyLocation} className="size-full">
          <LocateFixed size={36} color={colors.gray[400]} />
        </Pressable>
      </View>
      <Marker
        identifier="current"
        coordinate={currentLocation}
        title="Você está aqui"
        description="Sua localização atual"
        image={require("@/assets/location.png")}
      />

      {places.map((place) => (
        <Marker
          key={place.id}
          titleVisibility="visible"
          identifier={place.id}
          coordinate={{
            latitude: place.latitude,
            longitude: place.longitude,
          }}
        >
          <Callout onPress={() => router.navigate(`/pages/market/${place.id}`)}>
            <View>
              <Text>{place.name}</Text>
              <Text>{place.address}</Text>
            </View>
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
}
